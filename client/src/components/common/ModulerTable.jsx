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
	children,
	tableHeads,
	headClassName,
	showTableFooter,
	tableTitle,
}) {
	return (
		<Card>
			<CardHeader>
				<h1 className="text-2xl">{tableTitle} </h1>
			</CardHeader>
			<CardContent>
				<Table>
					<TableCaption>A list of your members.</TableCaption>
					<TableHeader>
						<TableRow>
							{tableHeads?.map((tableHead, i) => (
								<TableHead
									key={i}
									className={headClassName}>
									{tableHead}
								</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>{children}</TableBody>
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
