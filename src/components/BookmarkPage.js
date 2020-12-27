import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import MaterialTable from "material-table";

import { TableIcons } from "./TableIcons";

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 90,
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue("firstName") || ""} ${
                params.getValue("lastName") || ""
            }`,
    },
];

export default function BookmarkPage() {
    const classes = useStyles();
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState([]);

    async function fetchData() {
        const res = await fetch(
            "http://dummy.restapiexample.com/api/v1/employees"
        );
        await res
            .json()
            .then((res) => setData(res.data))
            .catch((err) => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Bookmark
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim praesent elementum facilisis leo
                vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum quisque non tellus. Convallis convallis
                tellus id interdum velit laoreet id donec ultrices. Odio morbi
                quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod
                quis viverra nibh cras. Metus vulputate eu scelerisque felis
                imperdiet proin fermentum leo. Mauris commodo quis imperdiet
                massa tincidunt. Cras tincidunt lobortis feugiat vivamus at
                augue. At augue eget arcu dictum varius duis at consectetur
                lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
            </Typography>

            <MaterialTable
                icons={TableIcons}
                columns={[
                    { title: "Id", field: "id" },
                    { title: "Name", field: "employee_name" },
                    {
                        title: "Surname",
                        field: "employee_salary",
                        type: "numeric",
                    },
                    {
                        title: "Birth Year",
                        field: "profile_image",
                    },
                ]}
                data={data}
                options={{
                    search: true,
                    exportButton: true,
                    exportAllData: true,
                    exportFileName: "bookmark",
                    showTitle: false,
                    headerStyle: {
                        backgroundColor: "#3f51b5",
                        color: "#FFF",
                        fontSize: 18,
                    },
                    rowStyle: {
                        fontSize: 16,
                    },
                }}
            />
        </div>
    );
}
