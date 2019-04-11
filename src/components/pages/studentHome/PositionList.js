import React, { Component } from "react";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Button, ButtonBase, Card, Typography } from "@material-ui/core";
import FavoriteRounded from "@material-ui/icons/FavoriteRounded";
import FavoriteBorderRounded from "@material-ui/icons/FavoriteBorderRounded";
import "react-perfect-scrollbar/dist/css/styles.css";
import "../../common/Component.css";
import "./PositionList.css";

class PositionList extends Component {
  renderPositions() {
    const { id, positions, likedPositions } = this.props;
    const liked = new Set(likedPositions.map(like => like.position_id));
    console.log("liked:", liked);
    const positionCards = positions.map(position => (
      <div key={position.id}>
        <Card className="positionList-card">
          <div className="positionList-card-center">
            <div className="positionList-card-title-container">
              <Typography className="positionList-card-title" variant="title">
                {position.name}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                disabled
                className="positionList-card-match"
              >
                70% Matched
              </Button>
            </div>
            {position.location && (
              <Typography className="subtitle" variant="body2">
                {position.location}
              </Typography>
            )}
            {position.description && (
              <Typography
                variant="body1"
                className="positionList-card-description"
              >
                {position.description}
              </Typography>
            )}
          </div>
          {liked.has(position.id) && (
            <ButtonBase
              disableRipple
              className="Button-base"
              onClick={_ => this.props.likePosition(position.id, false)}
            >
              <FavoriteRounded className="positionList-card-liked" />
            </ButtonBase>
          )}
          {!liked.has(position.id) && (
            <ButtonBase
              disableRipple
              className="Button-base"
              onClick={_ => this.props.likePosition(position.id, true)}
            >
              <FavoriteBorderRounded className="positionList-card-notLiked" />
            </ButtonBase>
          )}
        </Card>
      </div>
    ));
    return <PerfectScrollbar>{positionCards}</PerfectScrollbar>;
  }

  render() {
    return <div className="positionList">{this.renderPositions()}</div>;
  }
}

PositionList.propTypes = {
  id: PropTypes.number,
  positions: PropTypes.array.isRequired,
  likedPositions: PropTypes.array.isRequired
};

export default PositionList;
