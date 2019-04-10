import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import "./Component.css";

class FilterBar extends Component {
  render() {
    return <div className="Filter">{this.renderButtons()}</div>;
  }

  renderButtons() {
    const { filters, selectedFilter } = this.props;
    return Object.keys(filters).map(filter => {
      if (filters[filter].length > 0) {
        var className = ["Filter-button"];
        if (selectedFilter === filter) {
          className.push("Button-primary");
        }
        return (
          <Button
            key={filter}
            variant="contained"
            className={className.join(" ")}
            onClick={_ => this.props.onSelectedFilterChange(filter)}
          >
            {filter}
          </Button>
        );
      }
    });
  }
}

FilterBar.propTypes = {
  filters: PropTypes.object.isRequired,
  onSelectedFilterChange: PropTypes.func.isRequired,
  selectedFilter: PropTypes.string.isRequired
};

export default FilterBar;
