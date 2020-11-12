import { Avatar, Badge, createStyles, ListItem, ListItemAvatar, ListItemText, withStyles } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import firstLetterCapital from '../../../../utils/firstLetterCapital';

const StyledBadgeActive = withStyles((theme) =>
  createStyles({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }),
)(Badge);

const StyledBadgeInActive = withStyles((theme) =>
  createStyles({
    badge: {
      backgroundColor: '#efefef',
      color: '#efefef',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }),
)(Badge);

function SingleUser({ user, handleChatWith }) {
  const isOnline = isOnline(user.id);

  return (
    <ListItem onClick={()=>handleChatWith(user)}>
      <ListItemAvatar >
        {
          isOnline ?
            <StyledBadgeActive 
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot">
              <Avatar />
            </StyledBadgeActive> :
            <StyledBadgeInActive 
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot">
              <Avatar />
            </StyledBadgeInActive>
          
        }
      </ListItemAvatar>
      <ListItemText primary={`${firstLetterCapital(user.firstName)} ${firstLetterCapital(user.lastName)}`} />
    </ListItem>
  );
}

SingleUser.propTypes = {
  user:PropTypes.object,
  handleChatWith:PropTypes.func.isRequired
};

export default SingleUser;
