import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import StarRatingComponent from 'react-star-rating-component';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Person from "@material-ui/icons/Person";
import Timelapse from "@material-ui/icons/Timelapse";
import CardAvatar from "components/Card/CardAvatar.js";

import cardImagesStyles from "assets/jss/material-dashboard-react/cardImagesStyles.js";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



import { arrayUsers } from './DataService.js';
import avatar from "assets/img/faces/marc.jpg";

const useStyles = makeStyles((theme) => ({
  ...cardImagesStyles,
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textWhite: {
    "&, & *": {
      color: "#FFF"
    }
  }
}));

export default function CardsImages() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    img: '',
    nombre: '',
    apellido: '',
    username: '',
    email: '',
    city: '',
    country: '',
    cp: '',
    date: '',
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = (veterinarie) => {
    setState({
      img: veterinarie.image,
      nombre: veterinarie.nombre,
      apellido: 'Godinez Sanchez',
      username: veterinarie.nombre,
      email: veterinarie.email,
      city: 'Guadalajara',
      country: 'Mexico',
      cp: '45685',
      precio: veterinarie.precio,
      stars: veterinarie.stars,
      date: '',
      follow: false,
    })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onChange = date => setState({...state, date })

  const CardCalendar = () => {
    return (
      <Card profile style={{ marginTop: 50, }}>
        <CardAvatar profile style={{ width: 150, height: 150 }}>
          <img style={{ marginTop: 25 }} src={state.img} alt="..." />
        </CardAvatar>
        <CardBody profile>
          <Calendar
            onChange={onChange}
            value={state.date}
          />
        </CardBody>
      </Card>
    )
  };

  const CardProfile = () => {
    return (
      <Card profile style={{marginTop: 50,}}>
        <CardAvatar profile style={{ width: 150, height: 150}}>
            <img style={{marginTop: 25}} src={state.img} alt="..." />
        </CardAvatar>
        <CardBody profile style={{width: 500}}>
          <h6 className={classes.cardCategory}>CLIENTE</h6>
          <h4 className={classes.cardTitle}>{state.username}</h4>
          <h5 className={classes.cardTitle}>{state.nombre} {state.apellido}</h5>
          <p className={classes.cardTitle}>{state.email}</p>
          <h5 className={classes.cardTitle}>{state.city}, {state.country} {state.cp}</h5>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            editing={false}
            value={state.stars}
          />
          <h5 style={{ margin: 5 }}>
            Precio
                  </h5>
          <p>
            {state.precio ? '$' + state.precio : 'Gratis'}
          </p>
          <Button onClick={() => { setState({ ...state, follow: !state.follow})}} color={state.follow ? "primary" : "success"} round>
            {state.follow ? 'Dejar Seguir -' : 'Seguir +'}
          </Button>
        </CardBody>
      </Card>
    )
  };

  return (
    <div>
      <GridContainer>
        {arrayUsers.map((veterinarie) => {
          return (
            <GridItem xs={12} sm={12} md={3}>
              <Card>
                <img
                  className={classes.cardImgTop}
                  data-src="holder.js/100px180/"
                  alt="100%x180"
                  style={{ height: "180px", width: "100%", display: "block" }}
                  src={veterinarie.image}
                  data-holder-rendered="true"
                />
                <CardBody style={{textAlign: 'center'}}>
                  <h4 style={{ margin:0 }}>
                    {veterinarie.nombre}
                  </h4>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    editing={false}
                    value={veterinarie.stars}
                  />
                  <h5 style={{ margin: 5 }}>
                    Especialidad
                  </h5>
                  <p>
                    {veterinarie.especilidad.especialidadUno} <br/>
                    {veterinarie.especilidad.especialidadDos}
                  </p>
                  <h5 style={{ margin: 5 }}>
                    Precio
                  </h5>
                  <p>
                    {veterinarie.precio ? '$' + veterinarie.precio : 'Gratis'}
                  </p>
                  <Button color="success" onClick={() => { handleOpen(veterinarie) }}>Ver Perfil</Button>
                </CardBody>
              </Card>
            </GridItem>
          )
        })}
      </GridContainer>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CustomTabs
                title=""
                headerColor="success"
                tabs={[
                  {
                    tabName: "Perfil",
                    tabIcon: Person,
                    tabContent: (
                      <CardProfile />
                    )
                  },
                  {
                    tabName: "Horarios",
                    tabIcon: Timelapse,
                    tabContent: (
                      <CardCalendar />
                    )
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </Fade>
      </Modal>
    </div>
  );
}