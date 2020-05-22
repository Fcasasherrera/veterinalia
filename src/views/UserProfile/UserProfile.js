import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import AddAlert from "@material-ui/icons/AddAlert";
import Snackbar from "components/Snackbar/Snackbar.js";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const [br, setBR] = React.useState(false);
  const [follow, setFollow] = React.useState(false);
  const [state, setState] = React.useState({
    nombre: 'Marcos David',
    apellido: 'Godinez Sanchez',
    desc: 'Chico con muchos perros que requieren atención medica constante...',
    username: 'Pokedav',
    email: 'pokedav@hotmail.com',
    city: 'El Salto',
    country: 'Mexico',
    cp: '45693',
  });
  React.useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });
  const showNotification = place => {
    switch (place) {
      case "br":
        if (!br) {
          setBR(true);
          setTimeout(function () {
            setBR(false);
          }, 300);
        }
        break;
      default:
        break;
    }
  };

  const setFol = () => {    
    setFollow(!follow)
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CLIENTE</h6>
              <h4 className={classes.cardTitle}>{state.username}</h4>
              <h5 className={classes.cardTitle}>{state.nombre} {state.apellido}</h5>
              <p className={classes.cardTitle}>{state.email}</p>
              <h5 className={classes.cardTitle}>{state.city}, {state.country} {state.cp}</h5>
              <p className={classes.description}>
                Chico con muchos perros que requieren atención medica constante...
              </p>
              <Button onClick={setFol} color={follow ? "primary" : "success"} round>
                {follow ? 'Dejar Seguir -' : 'Seguir +'}
              </Button>
            </CardBody>
          </Card>
          <Snackbar
            place="br"
            color="success"
            icon={AddAlert}
            message="Pefil Modificado correctamente."
            open={br}
            closeNotification={() => setBR(false)}
            close
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Editar Perfil</h4>
              <p className={classes.cardCategoryWhite}>Completa tu perfil</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Nombre de usuario"
                    id="username"
                    onChange={(res) => { setState({ ...state, username: res.target.value })}}
                    inputProps={{
                      placeholder: state.username,
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Correo electronico"
                    id="email-address"
                    onChange={(res) => { setState({ ...state, email: res.target.value })}}
                    inputProps={{
                      placeholder: state.email,
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Nombre(s)"
                    id="first-name"
                    onChange={(res) => { setState({ ...state, nombre: res.target.value })}}
                    inputProps={{
                      placeholder: state.nombre,
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Apellidos"
                    id="last-name"
                    onChange={(res) => { setState({ ...state, apellido: res.target.value })}}
                    inputProps={{
                      placeholder: state.apellido,
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Ciudad"
                    id="city"
                    onChange={(res) => { setState({ ...state, city: res.target.value })}}
                    inputProps={{
                      placeholder: state.city,
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Pais"
                    id="country"
                    onChange={(res) => { setState({ ...state, country: res.target.value })}}
                    inputProps={{
                      placeholder: state.country,
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Codigo postal"
                    id="postal-code"
                    onChange={(res) => { setState({ ...state, cp: res.target.value })}}
                    inputProps={{
                      placeholder: state.cp,
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                    labelText="Descripcion personal"
                    id="about-me"
                    onChange={(res) => { setState({ ...state, desc: res.target.value }) }}
                    inputProps={{
                      placeholder: state.desc,
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button onClick={() => showNotification("br")} color="success">Actualizar Perfil</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
