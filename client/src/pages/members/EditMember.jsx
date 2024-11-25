import React, { useEffect, useState } from "react";
import Section from "@/components/common/Section";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Button } from "@/components/ui/button";

const EditMember = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [editable, setEditable] = useState(true);
  const [memberData, setMemberData] = useState({
    accessCard: false,
    age: 0,
    birthday: null,
    id: "",
    name: "",
    phoneNumber: "",
    registeredDate: "",
    _id: "",
  });

  //make editble

  const makeEditable = () => {
    setEditable(!editable);
  };

  const fetchMeberById = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/members/${id}`
      );

      const data = res.data.memberData;
      setLoading(false);
      setMemberData({
        accessCard: data.accessCard,
        age: data.age,
        birthday: new Date(data.birthday).toISOString().split("T")[0],
        id: data.id,
        name: data.name,
        phoneNumber: data.phoneNumber,
        registeredDate: new Date(data.registeredDate)
          .toISOString()
          .split("T")[0],
        _id: data._id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMeberById(id);
  }, [id]);

  return (
    <Section>
      <Card>
        <CardHeader>
          <section className="flex w-full justify-between">
            <div>
              <h1 className="text-2xl">Edit Member Details</h1>
              <CardDescription>User Id : {id}</CardDescription>
            </div>
            <div>
              <Button onClick={makeEditable}>Edit</Button>
            </div>
          </section>
        </CardHeader>
        {loading ? (
          <p>Loading .... </p>
        ) : (
          <CardContent>
            <form
              onSubmit={() => console.log("form submit")}
              className="grid gap-3"
            >
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={memberData.name || ""}
                  onChange={(e) => console.log(e.target.value)}
                  disabled={editable}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="name">Age</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={memberData.age || ""}
                  onChange={(e) => console.log(e.target.value)}
                  disabled={editable}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="name">Phone Number</Label>
                <Input
                  type="tel"
                  id="name"
                  placeholder="Name"
                  value={memberData.phoneNumber || ""}
                  onChange={(e) => console.log(e.target.value)}
                  disabled={editable}
                />
              </div>
              <div className="flex items-center space-x-2 my-3">
                <Switch
                  id="access-card"
                  checked={memberData.accessCard}
                  onChange={(e) => console.log(e.target.value)}
                  disabled={editable}
                />
                <Label htmlFor="access-card">Access Card</Label>
              </div>

              {/* calender component */}
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="birthday">Birthday</Label>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  className="p-2 rounded-sm"
                  onChange={(e) => console.log(e.target.value)}
                  value={memberData.birthday || new Date()}
                  disabled={editable}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="birthday">Registerded Date</Label>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  className="p-2 rounded-sm"
                  onChange={(e) => console.log(e.target.value)}
                  value={memberData.birthday || new Date()}
                  disabled={editable}
                />
              </div>
            </form>
          </CardContent>
        )}
      </Card>
    </Section>
  );
};

export default EditMember;
