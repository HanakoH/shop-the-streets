import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { FormGroup } from '@material-ui/core';

<FormGroup>
    <Checkbox 
        onClick={handleChange}
        icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} 
        value={id}
        name="loveThis" 
    />
</FormGroup>