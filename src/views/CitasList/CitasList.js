import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function CitasList() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    date: '',
  });
  const onChange = date => setState({ date })
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={9}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>Proximas Citas</h4>
            <p className={classes.cardCategoryWhite}>
              Citas de sus mascotas proximas
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="success"
              tableHead={["Hora", "Paciente", "Dueño", "Especie", "Raza"]}
              tableData={[
                ["12:00 PM", "Niger", "Marcos Godinez", "Perro", "Hushky"],
                ["2:00 PM", "Hooper", "Marcos Godinez", "Gato", "Siamese"],
                ["12:00 PM", "Niger", "Marcos Godinez", "Rana", "Desconocida"],
                ["4:00 PM", "Doris", "Marcos Godinez", "Rana", "Desconocida"],
                ["11:00 AM", "Philip", "Marcos Godinez", "Rana", "Desconocida"],
                ["2:00 PM", "Mason", "Marcos Godinez", "Rana", "Desconocida"],
                ["5:00 PM", "Porter", "Marcos Godinez", "Rana", "Desconocida"],
                ["9:00 AM", "Malawi", "Marcos Godinez", "Rana", "Desconocida"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>Proximas Citas</h4>
            <p className={classes.cardCategoryWhite}>
              Citas de sus mascotas proximas
            </p>
          </CardHeader>
          <CardBody>
            <Calendar
              onChange={onChange}
              value={state.date}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
