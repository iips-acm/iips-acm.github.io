import React from 'react';
import $ from 'jquery';
import Grid from '@material-ui/core/Grid';

const Contact = () => {
    $('#bootstrapForm').submit(function (event) {
        event.preventDefault()
        var extraData = {}
        $('#bootstrapForm').ajaxSubmit({
            data: extraData,
            dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
            error: function () {
                // Submit of form should be successful but JSONP callback will fail because Google Forms
                // does not support it, so this is handled as a failure.
                alert('Form Submitted. Thanks.')
                // You can also redirect the user to a custom thank-you page:
                // window.location = 'http://www.mydomain.com/thankyoupage.html'
            }
        })
    })
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
                    action="https://docs.google.com/forms/d/e/1FAIpQLSfjbCWcfNEnZO7hwyGQgYd94tHCifYqJtqHC9TiseFyyZXfuA/formResponse"
                    target="_self"
                    id="bootstrapForm"
                    method="POST">
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
                                    <input id="emailAddress" type="email" name="emailAddress" className="form-control"
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
                                    <input id="1181703993" type="text" name="entry.1181703993"
                                           className="form-control"/>
                                </div>
                            </fieldset>
                        </Grid>
                    </Grid>

                    <fieldset>
                        <legend htmlFor="402775779">Message</legend>
                        <div className="form-group">
                            <textarea id="1427811954" name="entry.1427811954" className="form-control"></textarea>
                        </div>
                    </fieldset>

                    <input type="hidden" name="fvv" value="1"/>
                    <input type="hidden" name="fbzx" value="8444327025892451972"/>
                    <input type="hidden" name="pageHistory" value="0"/>
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
