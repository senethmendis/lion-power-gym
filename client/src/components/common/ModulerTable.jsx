import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function ModulerTable({
  data,
  tableHeads,
  headClassName,
  showTableFooter,
  tableTitle,
}) {
  return (
    <Card>
      <CardHeader>
        <h1>{tableTitle} </h1>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              {tableHeads?.map((tableHead, i) => (
                <TableHead key={i} className={headClassName}>
                  {tableHead}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{data.invoice}</TableCell>
                <TableCell>{data.paymentStatus}</TableCell>
                <TableCell>{data.paymentMethod}</TableCell>
                <TableCell className="text-right">{data.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          {showTableFooter && (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </CardContent>
    </Card>
  );
}
