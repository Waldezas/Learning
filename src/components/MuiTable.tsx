import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Maddie",
    last_name: "Thackwray",
    email: "mthackwray0@wikia.com",
    gender: "Female",
    ip_address: "136.15.254.201",
  },
  {
    id: 2,
    first_name: "Arnaldo",
    last_name: "Turbefield",
    email: "aturbefield1@shinystat.com",
    gender: "Male",
    ip_address: "92.34.250.39",
  },
  {
    id: 3,
    first_name: "Brianne",
    last_name: "Kohlert",
    email: "bkohlert2@pagesperso-orange.fr",
    gender: "Bigender",
    ip_address: "122.28.211.107",
  },
  {
    id: 4,
    first_name: "Mikaela",
    last_name: "Froome",
    email: "mfroome3@harvard.edu",
    gender: "Female",
    ip_address: "226.132.23.95",
  },
  {
    id: 5,
    first_name: "Artus",
    last_name: "Scrivin",
    email: "ascrivin4@symantec.com",
    gender: "Male",
    ip_address: "109.191.173.95",
  },
  {
    id: 6,
    first_name: "Thurston",
    last_name: "Preston",
    email: "tpreston5@delicious.com",
    gender: "Male",
    ip_address: "229.143.165.60",
  },
  {
    id: 7,
    first_name: "Torr",
    last_name: "Mc Combe",
    email: "tmccombe6@linkedin.com",
    gender: "Male",
    ip_address: "127.38.178.187",
  },
  {
    id: 8,
    first_name: "Mallissa",
    last_name: "Lissett",
    email: "mlissett7@amazon.de",
    gender: "Female",
    ip_address: "25.207.137.139",
  },
  {
    id: 9,
    first_name: "Paulette",
    last_name: "Graalmans",
    email: "pgraalmans8@soundcloud.com",
    gender: "Female",
    ip_address: "4.73.204.72",
  },
  {
    id: 10,
    first_name: "Jenna",
    last_name: "Corbie",
    email: "jcorbie9@reference.com",
    gender: "Female",
    ip_address: "195.204.184.179",
  },
];
