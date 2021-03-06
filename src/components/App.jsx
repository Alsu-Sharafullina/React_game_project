import React, { Component } from "react";

import Equipment from "./Equipment.jsx";

import '../assets/css/App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            helmets : [], // массив шлемов
            gloves : [], // массив перчаток
            chests : [], // массив "грудей"
            boots : [], // массив ботинок
            swords : [], // массив мечей

            heart_path : "/assets/img/heart.png", //путь к картинке "сердце"
            shield_path : "/assets/img/shield.png", //путь к картинке "щит"
            shield2_path : "/assets/img/subtract.png", //путь к картинке "щит"
            sword_path : "/assets/img/sword.png", //путь к картинке "меч"

            initial_health_num : 0, // изначально указанное кол-во жизни
            current_health_sum : 0, // изменяемое кол-во жизни

            initial_armor_num : 0, // изначально указанное кол-во щитов
            current_armor_sum : 0, // изменяемое кол-во щитов

            initial_sword_num : 0, // изначально указанное кол-во мечей
            current_sword_sum : 0, // изменяемое кол-во мечей

            initial_price_num : 0, // изначальная цена
            current_price_sum : 0, // изменяемая цена

            current_helmets_img : "", // текущая картинка шлема(по цвету)
            current_chests_img : "", // текущая картинка груди (по цвету)
            current_gloves_img : "", // текущая картинка перчаток (по цвету)
            current_boots_img : "", // текущая картинка ботинок (по цвету)
            current_swords_img : "", // текущая картинка меча (по цвету)

            current_helmets : "none", //id выбранного шлема
            current_chests : null, //id выбранной груди
            current_glove : null, //id выбранной перчатки
            current_boot : null, //id выбранного ботинка
            current_sword : null, //id выбранного меча
            helmetsEnabled : ""
        };

        this.onChangeSelect = this.onChangeSelect.bind(this);

    }


    onChangeSelect(event) {
        const id = event.target.value;
        const data = event.target.getAttribute('data-info');

        let currentImg;
        let current_price_sum = parseInt(this.state.initial_price_num);
        let current_health_sum = parseInt(this.state.initial_health_num);
        let current_armor_sum = parseInt(this.state.initial_armor_num);
        let current_sword_sum = parseInt(this.state.initial_sword_num);

        const arr = ["helmets", "chests", "gloves", "boots", "swords"];
        let current_selected_item_price = 0;
        let current_selected_item_health = 0;
        let current_selected_item_armor = 0;
        let current_selected_item_sword = 0;

        if (id != "none") {

            currentImg = this.state[data][id].img;
            current_selected_item_price = parseInt(this.state[data][id].price);
            current_selected_item_health = parseInt(this.state[data][id].health);
            current_selected_item_armor = parseInt(this.state[data][id].armor);
            current_selected_item_sword = parseInt(this.state[data][id].attack);

        } else {
            currentImg = null;
        }

        current_price_sum += current_selected_item_price;
        current_health_sum += current_selected_item_health;
        current_armor_sum += current_selected_item_armor;
        current_sword_sum += current_selected_item_sword;

        for (let i of arr) {

            if (i != data) {
                let myPriceString = "";
                myPriceString = [i];

                const minidata = this.state[myPriceString];
                const mystring = "current_" + i;
                const cur_id = this.state[mystring];

                let price;
                let health;
                let armor;
                let sword;

                if (cur_id != null && typeof minidata[parseInt(cur_id)] != "undefined") {
                    price = parseInt(minidata[parseInt(cur_id)].price);
                    health = parseInt(minidata[parseInt(cur_id)].health);
                    armor = parseInt(minidata[parseInt(cur_id)].armor);
                    sword = parseInt(minidata[parseInt(cur_id)].attack);
                } else {
                    price = 0;
                    health = 0;
                    armor = 0;
                    sword = 0;
                }

                current_price_sum += price;
                current_health_sum += health;
                current_armor_sum += armor;
                current_sword_sum += sword;
            }
        }


        const state_object = {

        };

        let myImgString = "";
        myImgString = "current_" + data + "_img";
        state_object[myImgString] = currentImg;

        let idString = "";
        idString = "current_" + data;
        state_object[idString] = id;

        let myPriceString = "";
        myPriceString = "current_price_sum";
        state_object[myPriceString] = current_price_sum;

        let myHealthString = "";
        myHealthString = "current_health_sum";
        state_object[myHealthString] = current_health_sum;

        let myArmorString = "";
        myArmorString = "current_armor_sum";
        state_object[myArmorString] = current_armor_sum;

        let mySwordString = "";
        mySwordString = "current_sword_sum";
        state_object[mySwordString] = current_sword_sum;


        this.setState(state_object, function () {

                this.setState({
                    helmetsEnabled : (this.state.current_helmets != "none") ? true : false
                });
        });

    }

    componentDidMount() {

        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://test.datalb.ru/test.json"; // site that doesnt send Access-Control

        fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/http://test.datalb.ru/test.json
            .then(response => response.json())
            .then(json => json)
            .then(json => {
                this.setState({
                    helmets : json.equipment.helmets,
                    gloves : json.equipment.gloves,
                    chests : json.equipment.chests,
                    boots : json.equipment.boots,
                    swords : json.equipment.swords,
                    person_img : json.person.img,
                    person_alt_img : json.person['alt-img'],
                    girl_name : json.person.name,

                    initial_price : 0,
                    current_price_sum : 0,

                    initial_health_num : json.person.health,
                    current_health_sum : json.person.health,
                    initial_armor_num : json.person.armor,
                    current_armor_sum : json.person.armor,
                    initial_sword_num : json.person.attack,
                    current_sword_sum : json.person.attack,
                }, function () {

                });

            })
            .catch(() => console.log("Cant access " + url + " response. Blocked by browser?"));
    }

    render() {

        return (
            <div className="main">
                <div className="rectangle1">
                    <div className="rectangle__title">Shop</div>
                    <div className="equipments">

                        <Equipment items={this.state.helmets} title={"Helmet"} choose={"Выберите элемент"} arrname={"helmets"}
                                   ChangeSelect={this.onChangeSelect}/>

                        <Equipment items={this.state.chests} title={"Chest"} choose={"Выберите элемент"} arrname={"chests"}
                                   ChangeSelect={this.onChangeSelect}/>

                        <Equipment items={this.state.gloves} title={"Gloves"} choose={"Выберите элемент"} arrname={"gloves"}
                                   ChangeSelect={this.onChangeSelect}/>

                        <Equipment items={this.state.boots} title={"Boots"} choose={"Выберите элемент"} arrname={"boots"}
                                   ChangeSelect={this.onChangeSelect}/>

                        <Equipment items={this.state.swords} title={"Sword"} choose={"Выберите элемент"} arrname={"swords"}
                                   ChangeSelect={this.onChangeSelect}/>

                    </div>

                    <div style={{ margin: "50px 45px 0", fontSize: "14px", color: "#000000"}}>Equipment cost: {this.state.current_price_sum}</div>

                </div>
                <div className="rectangle2" style={{marginRight: "0"}}>
                    <div className="rectangle__img" style={{position: "relative"}}>
                        {(this.state.helmetsEnabled) ? <div className="hair__disabled "></div> : null}
                        <img className="helmets__img" src={this.state.current_helmets_img} alt=""/>
                        <img className="chests__img" src={this.state.current_chests_img} alt=""/>
                        <img className="gloves__img" src={this.state.current_gloves_img} alt=""/>
                        <img className="boots__img" src={this.state.current_boots_img} alt=""/>
                        <img className="swords__img" src={this.state.current_swords_img} alt=""/>
                        <img className="person__img" src={this.state.person_img} alt={this.state.person_alt_img}/>
                    </div>

                    <div className="person__info" style={{margin: "36px 0 0 80px"}}>
                         <div className="person__name" style={{marginBottom: "20px"}}>
                            <span style={{marginRight: "39px"}}>Name: </span>{this.state.girl_name}
                        </div>
                        <div className="stats">
                            <div className="healthMain">
                                <span style={{marginRight: "44px"}}>Stats: </span>
                                <span>{this.state.current_health_sum}</span>
                                <img style={{marginLeft: "26px"}} src={this.state.heart_path} alt=""/>
                            </div>

                            <div className="shieldMain">
                                <span style={{marginTop: "10px", marginLeft: "83px"}}>{this.state.current_armor_sum}</span>
                                <img style={{marginTop: "10px", marginLeft: "34px"}} src={this.state.shield_path} alt=""/>
                                <img style={{marginLeft: "-8px"}} src={this.state.shield2_path} alt=""/>
                            </div>

                            <div className="swordMain">
                                <span style={{marginTop: "10px", marginLeft: "83px"}}>{this.state.current_sword_sum}</span>
                                <img style={{marginTop: "10px", marginLeft: "34px"}} src={this.state.sword_path} alt=""/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
