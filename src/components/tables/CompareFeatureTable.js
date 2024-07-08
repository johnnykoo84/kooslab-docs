// src/components/Tables/CompareFeatureTable.js
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const ComparisonTable = ({ data }) => {
  return (
    <>
      <Typography variant="h5" component="div" align="center">
        {data.title}
      </Typography>
      <TableContainer component={Paper} square>
        <Typography variant="caption" component="i" align="right">
          <p>*기능 제공 여부 (✅ or ❌)와 함께, 5점 만점 평가 지표로 표시</p>
        </Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Feature</TableCell>
              {data.items.map((item) => (
                <TableCell align="center" key={item.name}>
                  {item.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.features.map((feature, index) => (
              <TableRow key={feature}>
                <TableCell component="th" scope="row">
                  {feature}
                </TableCell>
                {data.items.map((item) => (
                  <TableCell align="center" key={item.name}>
                    {item.values[index]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ComparisonTable;
