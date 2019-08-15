import React, { Component } from "react";

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

            current_helmets : null, //id выбранного шлема
            current_chests : null, //id выбранной груди
            current_glove : null, //id выбранной перчатки
            current_boot : null, //id выбранного ботинка
            current_sword : null, //id выбранного меча

        };

        this.onChangeSelect = this.onChangeSelect.bind(this);

    }


    onChangeSelect(event) {
        let id = event.target.value;
        let data = event.target.getAttribute('data-info');

        let currentImg;
        let current_price_sum = parseInt(this.state.initial_price_num);
        let current_health_sum = parseInt(this.state.initial_health_num);
        let current_armor_sum = parseInt(this.state.initial_armor_num);
        let current_sword_sum = parseInt(this.state.initial_sword_num);


        let arr = ["helmets", "chests", "gloves", "boots", "swords"];
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

                let minidata = this.state[myPriceString];
                let mystring = "current_" + i;
                let cur_id = this.state[mystring];

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

        let state_object = {

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

        });
    }

    componentDidMount(){

        fetch('dist/datalb.json')
            .then(response => response.json())
            .then(commits => {
                this.setState({
                    helmets : commits[0].equipment.helmets,
                    gloves : commits[0].equipment.gloves,
                    chests : commits[0].equipment.chests,
                    boots : commits[0].equipment.boots,
                    swords : commits[0].equipment.swords,
                    person_img : commits[0].person.img,
                    girl_name : commits[0].person.name,

                    initial_price : 0,
                    current_price_sum : 0,

                    initial_health_num : commits[0].person.health,
                    current_health_sum : commits[0].person.health,
                    initial_armor_num : commits[0].person.armor,
                    current_armor_sum : commits[0].person.armor,
                    initial_sword_num : commits[0].person.attack,
                    current_sword_sum : commits[0].person.attack,
                }, function () {

                });

            });
    }


    render() {
        return (
            <div className="main">
                <div className="rectangle1">
                    <div className="rectangle__title">Shop</div>
                    <div className="equipments">
                        <div className="equipments__item">
                            <div className="equipments__title">Helmet</div>
                            <div className="forms">
                                <select className="form-control" data-info="helmets" onChange={this.onChangeSelect}>
                                    <option value="none">Выберите элемент</option>
                                    {this.state.helmets.map((item, index) =>
                                        <option key={index} value={item.id}>{item.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className="equipments__item">
                            <div className="equipments__title">Chest</div>
                            <div className="forms">
                                <select className="form-control" data-info="chests" onChange={this.onChangeSelect}>
                                    <option value="none">Выберите элемент</option>
                                    {this.state.chests.map((item, index) =>
                                        <option key={index} value={item.id}>{item.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className="equipments__item">
                            <div className="equipments__title">Gloves</div>
                            <div className="forms">
                                <select className="form-control" data-info="gloves" onChange={this.onChangeSelect}>
                                    <option value="none">Выберите элемент</option>
                                    {this.state.gloves.map((item, index) =>
                                        <option key={index} value={item.id}>{item.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className="equipments__item">
                            <div className="equipments__title">Boots</div>
                            <div className="forms">
                                <select className="form-control" data-info="boots" onChange={this.onChangeSelect}>
                                    <option value="none">Выберите элемент</option>
                                    {this.state.boots.map((item, index) =>
                                        <option key={index} value={item.id}>{item.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className="equipments__item">
                            <div className="equipments__title">Sword</div>
                            <div className="forms">
                                <select className="form-control" data-info="swords" onChange={this.onChangeSelect}>
                                    <option value="none">Выберите элемент</option>
                                    {this.state.swords.map((item, index) =>
                                        <option key={index} value={item.id}>{item.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="cost">Equipment cost: {this.state.current_price_sum}</div>

                </div>
                <div className="rectangle2">
                    <div className="rectangle__img">
                        <img className="helmet__img" src={this.state.current_helmets_img} alt=""/>
                        <img className="chest__img" src={this.state.current_chests_img} alt=""/>
                        <img className="gloves__img" src={this.state.current_gloves_img} alt=""/>
                        <img className="boots__img" src={this.state.current_boots_img} alt=""/>
                        <img className="swords__img" src={this.state.current_swords_img} alt=""/>
                        <img className="girl_img" src={this.state.person_img} alt=""/>
                    </div>

                    <div className="personProps">
                         <div className="personName">
                            <span className="name">Name: </span>{this.state.girl_name}
                        </div>
                        <div className="stats">
                            <div className="statsMain">
                                <span className="stats__num">Stats: </span>
                                <span>{this.state.current_health_sum}</span>
                                <img className="heart__img" src={this.state.heart_path} alt=""/>
                            </div>

                            <div className="shieldMain">
                                <span className="shield_num">{this.state.current_armor_sum}</span>
                                <img className="shield__img" src={this.state.shield_path} alt=""/>
                            </div>

                            <div className="swordMain">
                                <span className="sword_num">{this.state.current_sword_sum}</span>
                                <img className="sword__img" src={this.state.sword_path} alt=""/>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;