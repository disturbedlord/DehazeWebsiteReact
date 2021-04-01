import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./index.css";
class OutputSection extends React.Component {
  state = {
    status: null
  };

  componentDidMount() {
    console.log(this.props)

    let imgOP = document.getElementById("output");
    let imgIP = document.getElementById("input");

    imgIP.src = this.props.in_img;
    imgOP.src = this.props.out_img;

    this.setState({
      status: this.props.status
    });
  }

  render() {
    return (
      <div className="OutputSectionMain">
        <div>
          {/* Intensity Slider */}
          <div>
            <div style={styles.status}>
              Status: {this.state.status}
            </div>
          </div>
        </div>
        {this.state.spinner ? (
          <div>
            <div class="d-flex justify-content-center">
              <div
                class="spinner-border"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="OutputSection">
              <div className="cardd">
                <div style={styles.images}>
                  <img id="input" width="100%" className="images" />
                </div>
                <p style={styles.text}>Input Image</p>
              </div>
              <div className="cardd">
                <div style={styles.images}>
                  <img id="output" width="100%" />
                </div>
                <p style={styles.text}>Output Image</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const styles = {
  images: {
    padding: "10px",
    backgroundColor: "#E2ECED",
  },
  text: {
    padding: "25px",
    textDecoration: "Underline",
  },
  status: {
    marginTop: "30px",
    marginBottom: "30px",
    marginLeft: "20px",
    display: "flex",
    justifyContent: "flex-start",
    fontWeight: "bold",
  },
  processing: {
    color: "#0a5ac4",
  },
  success: {
    color: "#2C8A00",
    paddingLeft: "5px",
  },
  failure: {
    color: "#cf3221",
    paddingLeft: "5px",
  },
};

export default OutputSection;
