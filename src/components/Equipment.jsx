import React, { Component } from "react";

class Equipment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.onEquipmentChangeSelect = this.onEquipmentChangeSelect.bind(this);
    }

    onEquipmentChangeSelect(event) {
        this.props.ChangeSelect(event);
    }

        render() {
        {
            return (
                <div className="equipments__item">
                    <div style={{fontSize: "14px", textAlign: "center"}}>{this.props.title}</div>
                    <div className="forms">
                        <select className="form-control" data-arr={this.props.items} data-info={this.props.arrname}
                                onChange={this.onEquipmentChangeSelect}>
                            <option value="none">{this.props.choose}</option>
                        {this.props.items.map((item, index) =>
                            <option key={index} value={index}>{item.name}</option>
                        )}
                        </select>
                    </div>
                </div>
            )
        }
    }
}

export default Equipment;