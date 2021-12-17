import React from 'react';
import $ from 'jquery';
import Grid from '@material-ui/core/Grid';

const Contact = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItem: 'center',
        }} id={'contact'}>
            <div style={{
                width: $(document).width() >= 768 ? '70%' : '100%'
            }}>
                <form
                    action="https://docs.google.com/forms/d/e/1FAIpQLSd2sbF3NQW8XQe5IwBQ1lFDgoXEL9jYb6Aicab9ruihNRsUXA/formResponse"
                    id="bootstrapForm">
                    <fieldset id={'heading'}>
                        <h2 id={'h1_heading'}>Contact Us <br/><small></small></h2>
                    </fieldset>
                    <Grid container={true}>
                        <Grid item md={6} sm={12} style={{
                            width: '100%'
                        }}>
                            <fieldset>
                                <legend htmlFor="">Email</legend>
                                <div className="form-group">
                                    <input id="1196443819" type="email" name="entry.1196443819" className="form-control"
                                           required/>
                                </div>
                            </fieldset>
                        </Grid>
                        <Grid item md={6} sm={12} style={{
                            width: '100%'
                        }}>
                            <fieldset>
                                <legend htmlFor="230991238">Name</legend>
                                <div className="form-group">
                                    <input id="2125832179" type="text" name="entry.2125832179"
                                           className="form-control"/>
                                </div>
                            </fieldset>
                        </Grid>
                    </Grid>

                    <fieldset>
                        <legend htmlFor="402775779">Message</legend>
                        <div className="form-group">
                            <textarea id="1611346208" name="entry.1611346208" className="form-control"></textarea>
                        </div>
                    </fieldset>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItem: 'center',
                        marginTop: 20
                    }}>
                        <input className="btn btn-primary" id={"btnSubmit"} type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
