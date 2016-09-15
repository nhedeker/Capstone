import Favorite from 'material-ui/svg-icons/action/favorite';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import React from 'react';

const SmallRecipe = React.createClass({
  render() {
    const { recipe, users } = this.props;

    const userColor = '#00bcd4';

    const styleLikeButton = {
      position: 'absolute',
      background: userColor,
      borderRadius: '50%',
      marginTop: '.25rem',
      marginLeft: '.25rem'
    };

    const styleLikeButtonIcon = {
      color: 'white'
    };

    const stylePaperBorder = {
      borderRadius: '1rem'
    };

    const styleMoreFlatButton = {
      borderBottomLeftRadius: '1rem',
      borderBottomRightRadius: '1rem',
      marginBottom: '0px',
      // position: 'absolute'
    };

    return <Paper
      className="smallRecipePaper"
      style={stylePaperBorder}
    >
      <div className="recipeImgContainer">
        <IconButton
          iconStyle={styleLikeButtonIcon}
          style={styleLikeButton}
        >
          <Favorite />
        </IconButton>
        <img className="recipeImg" src={recipe.imgUrl} />
      </div>
      <div className="smallRecipeContentsContainer">
        <h3>
          {`${recipe.name} `}
        </h3>
        <p>{recipe.description}</p>
        <Link to={`/user/${users[0].username}`}>
          <img
            className="gridProfileImg"
            src={"./images/default_profile.png"}
          />
        </Link>
      </div>
      <Link to={`/recipe/${recipe.code}`}>
        <FlatButton
          className="seeMoreButton"
          label="Full Recipe"
          primary={true}
          style={styleMoreFlatButton}
        />
      </Link>
      {/* <Link to={`/recipe/${recipe.code/edit}`}>
        <FlatButton
          backgroundColor={userColor}
          className="seeMoreButton"
          hoverColor="#0097a7"
          label="Edit Recipe"
          labelStyle={styleLikeButtonIcon}
          style={styleMoreFlatButton}
        />
      </Link> */}
    </Paper>;
  }
});

export default SmallRecipe;