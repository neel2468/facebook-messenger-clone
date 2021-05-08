import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './Message.css';


const useStyles = makeStyles({
  root: {
    padding: 10,
    "&:last-child": {
        paddingBottom: 10
    }
  },
});

const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF"
    }
})(Typography);

const Message = forwardRef(({message,username}, ref) => {
    const classes = useStyles();
    const isUser = username === message.username;
    return (
        <div ref={ref} className={isUser ? "message message_user": "message"}>
            {!isUser && <p style={{fontSize: 12, color: '#ABB2B9'}}>{message.username}</p>}
            <Card className={isUser  ? `message_userCard`: "message_guestCard"}>
                <CardContent className={classes.root}>
                    {
                        isUser ? (
                            <WhiteTextTypography  component="p">
                                {message.message}
                            </WhiteTextTypography>
                        ) : (
                            <Typography  component="p">
                                {message.message}
                            </Typography>
                        )
                    }
                </CardContent>
            </Card>
        </div>
    )
});

export default Message;
