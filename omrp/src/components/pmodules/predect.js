import React, { Component } from "react";
import Psidebar from "../common/pside";
import Slotcard from "../doctor_modules/appreating";
import jwtDecode from "jwt-decode";
import Axios from "axios";

class Viewreport extends Component {
  state = {
    data: null,
    data1: null,
    order: {
      phno: "",
    },
    value: "",
    sym: [
      "itching",
      "skin_rash",
      "nodal_skin_eruptions",
      "continuous_sneezing",
      "shivering",
      "chills",
      "joint_pain",
      "stomach_pain",
      "acidity",
      "ulcers_on_tongue",
      "muscle_wasting",
      "vomiting",
      "burning_micturition",
      "spotting_ urination",
      "fatigue",
      "weight_gain",
      "anxiety",
      "cold_hands_and_feets",
      "mood_swings",
      "weight_loss",
      "restlessness",
      "lethargy",
      "patches_in_throat",
      "irregular_sugar_level",
      "cough",
      "high_fever",
      "sunken_eyes",
      "breathlessness",
      "sweating",
      "dehydration",
      "indigestion",
      "headache",
      "yellowish_skin",
      "dark_urine",
      "nausea",
      "loss_of_appetite",
      "pain_behind_the_eyes",
      "back_pain",
      "constipation",
      "abdominal_pain",
      "diarrhoea",
      "mild_fever",
      "yellow_urine",
      "yellowing_of_eyes",
      "acute_liver_failure",
      "fluid_overload",
      "swelling_of_stomach",
      "swelled_lymph_nodes",
      "malaise",
      "blurred_and_distorted_vision",
      "phlegm",
      "throat_irritation",
      "redness_of_eyes",
      "sinus_pressure",
      "runny_nose",
      "congestion",
      "chest_pain",
      "weakness_in_limbs",
      "fast_heart_rate",
      "pain_during_bowel_movements",
      "pain_in_anal_region",
      "bloody_stool",
      "irritation_in_anus",
      "neck_pain",
      "dizziness",
      "cramps",
      "bruising",
      "obesity",
      "swollen_legs",
      "swollen_blood_vessels",
      "puffy_face_and_eyes",
      "enlarged_thyroid",
      "brittle_nails",
      "swollen_extremeties",
      "excessive_hunger",
      "extra_marital_contacts",
      "drying_and_tingling_lips",
      "slurred_speech",
      "knee_pain",
      "hip_joint_pain",
      "muscle_weakness",
      "stiff_neck",
      "swelling_joints",
      "movement_stiffness",
      "spinning_movements",
      "loss_of_balance",
      "unsteadiness",
      "weakness_of_one_body_side",
      "loss_of_smell",
      "bladder_discomfort",
      "foul_smell_of urine",
      "continuous_feel_of_urine",
      "passage_of_gases",
      "internal_itching",
      "toxic_look_(typhos)",
      "depression",
      "irritability",
      "muscle_pain",
      "altered_sensorium",
      "red_spots_over_body",
      "belly_pain",
      "abnormal_menstruation",
      "dischromic _patches",
      "watering_from_eyes",
      "increased_appetite",
      "polyuria",
      "family_history",
      "mucoid_sputum",
      "rusty_sputum",
      "lack_of_concentration",
      "visual_disturbances",
      "receiving_blood_transfusion",
      "receiving_unsterile_injections",
      "coma",
      "stomach_bleeding",
      "distention_of_abdomen",
      "history_of_alcohol_consumption",
      "blood_in_sputum",
      "prominent_veins_on_calf",
      "palpitations",
      "painful_walking",
      "pus_filled_pimples",
      "blackheads",
      "scurring",
      "skin_peeling",
      "silver_like_dusting",
      "small_dents_in_nails",
      "inflammatory_nails",
      "blister",
      "red_sore_around_nose",
      "yellow_crust_ooze",
    ],
    suggestions: [],
    selectedsym: [],
    res: null,
    symptoms: {
      itching: 0,
      skin_rash: 0,
      nodal_skin_eruptions: 0,
      continuous_sneezing: 0,
      shivering: 0,
      chills: 0,
      joint_pain: 0,
      stomach_pain: 0,
      acidity: 0,
      ulcers_on_tongue: 0,
      muscle_wasting: 0,
      vomiting: 0,
      burning_micturition: 0,
      "spotting_ urination": 0,
      fatigue: 0,
      weight_gain: 0,
      anxiety: 0,
      cold_hands_and_feets: 0,
      mood_swings: 0,
      weight_loss: 0,
      restlessness: 0,
      lethargy: 0,
      patches_in_throat: 0,
      irregular_sugar_level: 0,
      cough: 0,
      high_fever: 0,
      sunken_eyes: 0,
      breathlessness: 0,
      sweating: 0,
      dehydration: 0,
      indigestion: 0,
      headache: 0,
      yellowish_skin: 0,
      dark_urine: 0,
      nausea: 0,
      loss_of_appetite: 0,
      pain_behind_the_eyes: 0,
      back_pain: 0,
      constipation: 0,
      abdominal_pain: 0,
      diarrhoea: 0,
      mild_fever: 0,
      yellow_urine: 0,
      yellowing_of_eyes: 0,
      acute_liver_failure: 0,
      fluid_overload: 0,
      swelling_of_stomach: 0,
      swelled_lymph_nodes: 0,
      malaise: 0,
      blurred_and_distorted_vision: 0,
      phlegm: 0,
      throat_irritation: 0,
      redness_of_eyes: 0,
      sinus_pressure: 0,
      runny_nose: 0,
      congestion: 0,
      chest_pain: 0,
      weakness_in_limbs: 0,
      fast_heart_rate: 0,
      pain_during_bowel_movements: 0,
      pain_in_anal_region: 0,
      bloody_stool: 0,
      irritation_in_anus: 0,
      neck_pain: 0,
      dizziness: 0,
      cramps: 0,
      bruising: 0,
      obesity: 0,
      swollen_legs: 0,
      swollen_blood_vessels: 0,
      puffy_face_and_eyes: 0,
      enlarged_thyroid: 0,
      brittle_nails: 0,
      swollen_extremeties: 0,
      excessive_hunger: 0,
      extra_marital_contacts: 0,
      drying_and_tingling_lips: 0,
      slurred_speech: 0,
      knee_pain: 0,
      hip_joint_pain: 0,
      muscle_weakness: 0,
      stiff_neck: 0,
      swelling_joints: 0,
      movement_stiffness: 0,
      spinning_movements: 0,
      loss_of_balance: 0,
      unsteadiness: 0,
      weakness_of_one_body_side: 0,
      loss_of_smell: 0,
      bladder_discomfort: 0,
      "foul_smell_of urine": 0,
      continuous_feel_of_urine: 0,
      passage_of_gases: 0,
      internal_itching: 0,
      "toxic_look_(typhos)": 0,
      depression: 0,
      irritability: 0,
      muscle_pain: 0,
      altered_sensorium: 0,
      red_spots_over_body: 0,
      belly_pain: 0,
      abnormal_menstruation: 0,
      "dischromic _patches": 0,
      watering_from_eyes: 0,
      increased_appetite: 0,
      polyuria: 0,
      family_history: 0,
      mucoid_sputum: 0,
      rusty_sputum: 0,
      lack_of_concentration: 0,
      visual_disturbances: 0,
      receiving_blood_transfusion: 0,
      receiving_unsterile_injections: 0,
      coma: 0,
      stomach_bleeding: 0,
      distention_of_abdomen: 0,
      history_of_alcohol_consumption: 0,
      blood_in_sputum: 0,
      prominent_veins_on_calf: 0,
      palpitations: 0,
      painful_walking: 0,
      pus_filled_pimples: 0,
      blackheads: 0,
      scurring: 0,
      skin_peeling: 0,
      silver_like_dusting: 0,
      small_dents_in_nails: 0,
      inflammatory_nails: 0,
      blister: 0,
      red_sore_around_nose: 0,
      yellow_crust_ooze: 0,
    },
  };

  componentWillMount() {
    this.allorders();
  }

  allorders = async () => {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    const omr = user.omr;

    const data1 = await Axios.post("http://localhost:3001/getappbyp", {
      omr: omr,
    });
    await this.setState({ data1: data1.data });
  };

  handlechangesym = ({ currentTarget: input }) => {
    const sym = [...this.state.sym];
    var suggestions = [...this.state.suggestions];

    const value = input.value;

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = sym.filter((v) => regex.test(v));
    }
    console.log(this.state.selectedsym, "selected past");

    this.setState({ suggestions });
  };

  handlechangelist = async ({ currentTarget: input }) => {
    var selectedsym = [...this.state.selectedsym];
    var suggestions = [...this.state.suggestions];

    console.log(selectedsym, "list");
    console.log(selectedsym.length, "lee");

    if (selectedsym.length > 0) {
      selectedsym[selectedsym.length] = input.value;
    } else {
      selectedsym[0] = input.value;
    }
    suggestions = [];

    console.log(selectedsym, "selectedsym");
    await this.setState({ selectedsym });
    this.setState({ suggestions });
  };

  predict = async (e) => {
    e.preventDefault();
    var symptoms = { ...this.state.symptoms };
    var selectedsym = [...this.state.selectedsym];

    for (var i = 0; i < selectedsym.length; i++) {
      symptoms[selectedsym[i]] = 1;

      console.log(selectedsym[i]);
    }

    await this.setState({ symptoms });
    console.log(this.state.symptoms, "updated");

    Axios.post("http://127.0.0.1:5000/reg", {
      // Adding method type

      a: this.state.symptoms,
    })
      .then((res) => {
        this.setState({ res: res.data });
        console.log(res.data, "your response");
        console.log("hi");
      })

      .catch(function (error) {
        console.log(error);
        //Perform action based on error
      });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-3 card">
            <Psidebar />
          </div>
          <div className="col-lg-9 card">
            <br />
            <div className="row" style={{ marginTop: "100 px" }}>
              <div className="col-lg-11">
                <hr />
                <h5
                  style={{
                    color: "gray",

                    marginLeft: "1px",
                  }}
                >
                  Self test
                </h5>
                <hr />
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-5">
                    <hr />
                    <h5>Enter your symptoms</h5>
                    <hr />
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                          <img
                            src="data:image/png;base64,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"
                            alt=""
                            width="22px"
                            height="22px"
                          />
                        </span>
                      </div>

                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter symptom keyword select
"
                        onChange={this.handlechangesym}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    {this.state.suggestions.length > 0 ? (
                      <div>
                        <div className="form-group">
                          <select
                            className="form-control "
                            name="destination"
                            onChange={this.handlechangelist}
                            value={this.state.value}
                          >
                            <option>slect symptoms</option>

                            {this.state.suggestions.map((sy) => (
                              <option value={sy}>{sy}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    ) : (
                      <h6 style={{ color: "gray" }}></h6>
                    )}
                    <button className="btn btn-dark" onClick={this.predict}>
                      Predict Disease
                    </button>
                    <br />
                    <br />

                    {this.state.res ? (
                      <div>
                        <h6 style={{ textAlign: "left" }}>
                          Disease Predicting Result
                        </h6>
                        <div
                          className="card"
                          style={{ border: "1px solid black" }}
                        >
                          <div className="cardbody" style={{ margin: "2px" }}>
                            <h6 style={{ color: "gray", textAlign: "left" }}>
                              Our system predicted your disease based on
                              symptoms provided{" "}
                            </h6>
                            <h6 style={{ color: "gray", textAlign: "left" }}>
                              {" "}
                              You may have : {this.state.res}
                            </h6>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <h6></h6>
                    )}
                  </div>
                  <div className="col-md-5">
                    <hr />
                    <h5>slected symptoms</h5>
                    <hr />
                    <div class="card">
                      <div class="card-body" style={{ marginBottom: "280px" }}>
                        {this.state.selectedsym.length > 0 ? (
                          <div>
                            <ul class="list-group l">
                              {this.state.selectedsym.map((sy) => (
                                <div>
                                  <li class="list-group-item list-group-item-dark">
                                    {sy}
                                  </li>

                                  <br />
                                </div>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <h1> </h1>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Viewreport;
