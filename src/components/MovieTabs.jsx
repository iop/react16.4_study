import React from "react";

class MovieTabs extends React.Component {
  componentWillReceiveProps(nextProps, nextState) {
    console.log("nextProps", nextProps.sort_by);
    console.log("prevProps", this.props.sort_by);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.sort_by !== this.props.sort_by) {
      return true;
    }
    return false;
  }

  render() {
    const { sort_by, updateSortBy } = this.props;
    const handleClick = value => {
      return event => {
        updateSortBy(value);
      };
    };

    const getClassName = value => {
      return `nav-link ${sort_by === value ? "active" : ""} `;
    };

    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div
            className={getClassName("popuarity.desc")}
            onClick={handleClick("popuarity.desc")}
          >
            Popularity
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassName("revenew.desc")}
            onClick={handleClick("revenew.desc")}
          >
            Revenue{" "}
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassName("average.desc")}
            onClick={handleClick("average.desc")}
          >
            Vote average
          </div>
        </li>
      </ul>
    );
  }
}

export default MovieTabs;
