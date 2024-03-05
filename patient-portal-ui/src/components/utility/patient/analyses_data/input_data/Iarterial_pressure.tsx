import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { InputAdornment } from "@mui/material";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DefaultAllData } from "../../../../../datajs/DefaultAllData";
import { capitalizeOnlyFirstLetter, isIsoDate, toIsoDate } from '../../../../../utils/ManageDate';
import dayjs from 'dayjs'

interface Iarterial_pressureProps {
    code?: string;
    defaultOptionValue?: string | null;
    defaultValue1?: number;
    defaultValue2?: number;
    id?: number;
    id_measure?: number;
    maxValue: number | string;
    measurementType: string;
    measurementValueType?: string;
    minValue: number | string;
    uom?: string;
    date?: string;
    hour?: string;
    date_complete: string;
    value2?: number;
    value1?: number;
}
interface $d {
    $d?: string;
}
export default function Iarterial_pressure(props: {
    dataDef: Iarterial_pressureProps;
    edit?: boolean
    delete?: boolean
}) {
    const [dataMin, setDataMin] = React.useState<any>(0);
    const [dataMax, setDataMax] = React.useState<any>(0);
    const navigate = useNavigate();
    const [dateTime, setDateTime] = React.useState<any>(Date.now());


    const [dataErrorMin, setDataErrorMin] = useState(false);
    const [dataErrorMax, setDataErrorMax] = useState(false);
    const [dataErrorMessageMin, setDataErrorMessageMin] = useState("");
    const [dataErrorMessageMax, setDataErrorMessageMax] = useState("");
    const [dataDisabled, setDataDisabled] = useState(false);
    const [dataDelete, setDataDelete] = useState(false);
    const [deleteMeasure, setDeleteMeasure] = useState("");

    let rif = props.dataDef;

    let date_rif: Date | string | number = Date.now();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    useEffect(() => {

        // --- manage default
        rif.id_measure ? setDataDisabled(true) : setDataDisabled(false);
        if (rif.date_complete) {
            let dateR = new Date(rif.date_complete).toISOString()
            setDateTime(dateR);
        } else {
            setDateTime(new Date());
        }

        setDataMin(rif.value1 ? rif.value1 : rif.defaultValue1);
        setDataMax(rif.value2 ? rif.value2 : rif.defaultValue2);
    }, []);
    useEffect(() => {
        // --- manage edit
        if (props.edit == true) {
            setDataDisabled(false);
        }
    }, [props.edit]);
    // --- manage delete
    useEffect(() => {
        if (dataDelete == true) {
            setOpen(true);
        } else {
            setDataDelete(true);
        }
    }, [props.delete]);
    // --- manage delete choice
    useEffect(() => {
        if (deleteMeasure == "y") {
            setOpen(false);
            // let patientId = localStorage.getItem("IdPatient");
            let id_measure: any = rif.id_measure;

            DefaultAllData.deleteMeasurement(id_measure).then((res) => {


                navigate('/PatientMeasurements',
                    {
                        state: {
                            res: res
                        }
                    });
            });
        }
        if (deleteMeasure == "n") {

            setOpen(false)
            window.location.reload();
        } 
    }, [deleteMeasure]);

    const handleSubmit = (event: {
        [x: string]: any; preventDefault: () => void;
    }) => {
        event.preventDefault();
        setDataErrorMax(false);
        setDataErrorMin(false);
        if (dataMin == null) {

            setDataErrorMin(true);
            setDataErrorMessageMin("Il valore non può essere vuoto")
        } else if (dataMax == null) {

            setDataErrorMax(true);

            setDataErrorMessageMax("Il valore non può essere vuoto")
        } else if (dataMin <= rif.minValue) {

            setDataErrorMin(true);
            setDataErrorMessageMin("Il valore deve essere maggiore di " + rif.minValue)
        } else if (dataMax >= rif.maxValue) {

            setDataErrorMax(true);
            setDataErrorMessageMax("Il valore deve essere minore di " + rif.maxValue)
        } else if (dataMin > dataMax) {

            setDataErrorMax(true);
            setDataErrorMin(true);
            setDataErrorMessageMax("Il valore deve essere maggiore di " + dataMin)
            setDataErrorMessageMin("Il valore deve essere minore di " + dataMax)
        } else {
            setDataErrorMax(false);
            setDataErrorMin(false);
            setDataErrorMessageMax("");
            setDataErrorMessageMin("");
            if (dataDisabled == false) {
                // --- manage update/insert
                let ins_upd = rif.id_measure ? rif.id_measure : ""; // --- if exist update else new measure
                let patientId = localStorage.getItem("IdPatient");
                let value1: any = dataMin;
                let value2: any = dataMax;
                let recordDate = toIsoDate(dateTime);
                let recordTypeCode = rif.code;


                if (ins_upd == '') {


                    DefaultAllData.postInsertMeasurement(patientId, value1, value2, recordDate, recordTypeCode).then((res) => {
                        console.log(res);

                        navigate('/PatientMeasurements',
                            {
                                state: {
                                    res: res
                                }
                            });
                    });
                } else {


                    DefaultAllData.getMeasurementbyId(ins_upd).then((res_all) => {


                    });
                }

            }
        }
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <Typography variant="subtitle1" gutterBottom>
                            Do you want to remove this measure?
                        </Typography>

                        <Button key="1" color="primary" onClick={() => setDeleteMeasure("y")} >Yes</Button>
                        <Button key="2" color="primary" onClick={() => setDeleteMeasure("n")}>No</Button>
                    </div>
                </Box>
            </Modal>
            <form onSubmit={handleSubmit} id='my-form'>
                <Box display="flex"
                    justifyContent="center"
                    alignItems="center"> <Box component="img" src="/static/measure_patient/Blood Pressure.png" alt="logo" /></Box>

                <Box sx={{ width: 1, mt: 1.5 }}>
                    <TextField
                        type="number"
                        onChange={e => setDataMin(e.target.value)}
                        required
                        disabled={dataDisabled}
                        name="arterial_pressure"
                        label={capitalizeOnlyFirstLetter(rif.measurementType) + " Min"}
                        id="outlined-start-adornment"
                        sx={{ width: 1 }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">{rif.uom}:</InputAdornment>,
                        }}
                        error={dataErrorMin}
                        helperText={dataErrorMessageMin}
                        defaultValue={rif.value1 ? rif.value1 : rif.defaultValue1} />
                    <TextField
                        type="number"
                        onChange={e => setDataMax(e.target.value)}
                        required
                        disabled={dataDisabled}
                        name="arterial_pressure"
                        label={capitalizeOnlyFirstLetter(rif.measurementType) + " Max"}
                        id="outlined-start-adornment"
                        sx={{ width: 1, mt: 1.5 }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">{rif.uom}:</InputAdornment>,
                        }}
                        error={dataErrorMax}
                        helperText={dataErrorMessageMax}
                        defaultValue={rif.value2 ? rif.value2 : rif.defaultValue2} />
                </Box>
                <Box sx={{ width: 1, mt: 1.5 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <MobileDateTimePicker
                                disabled={dataDisabled}
                                onChange={(newValue) => {
                                    setDateTime(newValue?.toISOString());
                                }} sx={{ width: 1 }} defaultValue={dayjs(rif.date_complete)} />
                        </DemoContainer>
                    </LocalizationProvider>
                </Box>
            </form>
        </>
    );
};

