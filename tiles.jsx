import React from 'react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Zoom from "@material-ui/core/Zoom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    container: {
        display: 'flex',
    },
}));


export default function Tiles(){
        const [checked, setChecked] = React.useState(false);
        const handleChange = () => {
            setChecked(prev => !prev);
        };
        const classes = useStyles();

        return (
            <div className={classes.container}>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} />}
                    label="Table"
                />
                <div className={classes.root}>
                    <ButtonGroup
                        orientation="vertical"
                        variant="text"
                        color="secondary"
                        aria-label="vertical contained primary button group">
                        <Zoom in={checked} style={{ transitionDelay: checked ? '50ms' : '0ms' }} >
                            <Button id={'topL'}>TopL</Button>
                        </Zoom>
                        <Zoom in={checked} style={{ transitionDelay: checked ? '100ms' : '0ms' }}>
                            <Button id={'midL'}>MidL</Button>
                        </Zoom>
                        <Zoom in={checked} style={{ transitionDelay: checked ? '150ms' : '0ms' }}>
                            <Button id={'botL'}>BotL</Button>
                        </Zoom>
                    </ButtonGroup>
                    <ButtonGroup
                        orientation="vertical"
                        variant="text"
                        color="secondary"
                        aria-label="vertical contained primary button group">
                        <Zoom in={checked} style={{ transitionDelay: checked ? '200ms' : '0ms' }}>
                            <Button id={'topM'}>TopM</Button>
                        </Zoom>
                        <Zoom in={checked} style={{ transitionDelay: checked ? '250ms' : '0ms' }}>
                            <Button id={'midM'}>MidM</Button>
                        </Zoom>
                        <Zoom in={checked} style={{ transitionDelay: checked ? '300ms' : '0ms' }}>
                            <Button id={'botM'}>BotM</Button>
                        </Zoom>
                    </ButtonGroup>
                    <ButtonGroup
                        orientation="vertical"
                        variant="text"
                        color="secondary"
                        aria-label="vertical contained secondary button group">
                        <Zoom in={checked} style={{ transitionDelay: checked ? '350ms' : '0ms' }}>
                            <Button id={'topR'}>TopR</Button>
                        </Zoom>
                        <Zoom in={checked} style={{ transitionDelay: checked ? '400ms' : '0ms' }}>
                            <Button id={'midR'}>MidR</Button>
                        </Zoom>
                        <Zoom in={checked} style={{ transitionDelay: checked ? '450ms' : '0ms' }}>
                            <Button id={'botR'}>BotR</Button>
                        </Zoom>

                    </ButtonGroup>
                </div>
            </div>
        )
}