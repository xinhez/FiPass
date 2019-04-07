import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import "./../../common/Filter.css";

class CompanyFilter extends Component {
  render() {
    return <div className="Filter">{this.renderButtons()}</div>;
  }

  renderButtons() {
    const { filters, selectedFilter } = this.props;
    return Object.keys(filters).map(name => {
      if (filters[name].length > 0) {
        var className = ["Filter-button"];
        if (selectedFilter === name) {
          className.push("Filter-button-selected");
        }
        return (
          <Button
            key={name}
            variant="contained"
            className={className.join(" ")}
            onClick={_ => this.props.onSelectedFilterChange(name)}
          >
            {name}
          </Button>
        );
      }
    });
  }
}

CompanyFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  onSelectedFilterChange: PropTypes.func.isRequired,
  selectedFilter: PropTypes.string.isRequired
};

export default CompanyFilter;
