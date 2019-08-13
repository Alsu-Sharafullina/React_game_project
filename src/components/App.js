import React, { Component } from "react";

import '../assets/css/App.css';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            helmets : [],
            gloves : [],
            chests : [],
            boots : [],
            swords : [],

            person_img : "",
            girl_name : "",

            heart_path : "/assets/img/heart.png",
            shield_path : "/assets/img/shield.png",
            sword_path : "/assets/img/sword.png",

            initial_health_num : 0, //есть изначально
            current_health_sum : 0, //меняется

            initial_armor_num : 0, //есть изначально
            current_armor_sum : 0, //меняется

            initial_sword_num : 0, //есть изначально
            current_sword_sum : 0, //меняется

            initial_price : 0,
            current_price_sum : 0,

            current_helmets_img : "",
            current_chests_img : "",
            current_gloves_img : "",
            current_boots_img : "",
            current_swords_img : "",

            current_helmet : null, //id выбранного шлема
            current_chest : null, //id выбранной груди
            current_glove : null, //id выбранной перчатки
            current_boot : null, //id выбранного ботинка
            current_sword : null, //id выбранного меча

        };

        this.onHelmetChangeSelect = this.onHelmetChangeSelect.bind(this);
        this.onChestChangeSelect = this.onChestChangeSelect.bind(this);
        this.onGlovesChangeSelect = this.onGlovesChangeSelect.bind(this);
        this.onBootsChangeSelect = this.onBootsChangeSelect.bind(this);
        this.onSwordsChangeSelect = this.onSwordsChangeSelect.bind(this);
    }


    onHelmetChangeSelect(event) {
        let id = event.target.value;

        this.state.current_helmet = id;

        let chest_health = (this.state.current_chest == null) ? 0 : parseInt(this.state["chests"][this.state.current_chest].health);
        let glove_health = (this.state.current_glove == null) ? 0 : parseInt(this.state["gloves"][this.state.current_glove].health);
        let boots_health = (this.state.current_boot == null) ? 0 : parseInt(this.state["boots"][this.state.current_boot].health);
        let sword_health = (this.state.current_sword == null) ? 0 : parseInt(this.state["swords"][this.state.current_sword].health);

        let chest_armor = (this.state.current_chest == null) ? 0 : parseInt(this.state["chests"][this.state.current_chest].armor);
        let glove_armor = (this.state.current_glove == null) ? 0 : parseInt(this.state["gloves"][this.state.current_glove].armor);
        let boots_armor = (this.state.current_boot == null) ? 0 : parseInt(this.state["boots"][this.state.current_boot].armor);
        let sword_armor = (this.state.current_sword == null) ? 0 : parseInt(this.state["swords"][this.state.current_sword].armor);

        let chest_sword = (this.state.current_chest == null) ? 0 : parseInt(this.state["chests"][this.state.current_chest].attack);
        let glove_sword = (this.state.current_glove == null) ? 0 : parseInt(this.state["gloves"][this.state.current_glove].attack);
        let boots_sword = (this.state.current_boot == null) ? 0 : parseInt(this.state["boots"][this.state.current_boot].attack);
        let sword_sword = (this.state.current_sword == null) ? 0 : parseInt(this.state["swords"][this.state.current_sword].attack);


        if (id === "none") {

            let current_health_sum = parseInt(this.state.initial_health_num)
                + chest_health
                + glove_health
                + boots_health
                + sword_health;

            let current_armor_sum = parseInt(this.state.initial_armor_num)
                + chest_armor
                + glove_armor
                + boots_armor
                + sword_armor;

            let current_sword_sum = parseInt(this.state.initial_sword_num)
                + chest_sword
                + glove_sword
                + boots_sword
                + sword_sword;



            this.setState({
                current_helmets_img: null,
                current_health_sum : current_health_sum,
                current_armor_sum : current_armor_sum,
                current_sword_sum : current_sword_sum,
            })
        } else {
            let currentImg = this.state["helmets"][id].img;

            let current_health_sum = parseInt(this.state.initial_health_num)
                + parseInt(this.state["helmets"][id].health)
                + chest_health
                + glove_health
                + boots_health
                + sword_health;

            let current_armor_sum = parseInt(this.state.initial_armor_num)
                + parseInt(this.state["helmets"][id].armor)
                + chest_armor
                + glove_armor
                + boots_armor
                + sword_armor;

            let current_sword_sum = parseInt(this.state.initial_sword_num)
                + parseInt(this.state["helmets"][id].attack)
                + chest_sword
                + glove_sword
                + boots_sword
                + sword_sword;

            this.setState({
                current_helmets_img : currentImg,
                current_health_sum : current_health_sum,
                current_armor_sum : current_armor_sum,
                current_sword_sum : current_sword_sum,
            });
        }

    }

    onChestChangeSelect(event) {
        let id = event.target.value;

        this.state.current_chest = id;

        let helmet_health = (this.state.current_helmet == null) ? 0 : parseInt(this.state["helmets"][this.state.current_helmet].health);
        //console.log(helmet_health);
        let glove_health = (this.state.current_glove == null) ? 0 : parseInt(this.state["gloves"][this.state.current_glove].health);
        let boots_health = (this.state.current_boot == null) ? 0 : parseInt(this.state["boots"][this.state.current_boot].health);
        let sword_health = (this.state.current_sword == null) ? 0 : parseInt(this.state["swords"][this.state.current_sword].health);

        let helmet_armor = (this.state.current_helmet == null) ? 0 : parseInt(this.state["helmets"][this.state.current_helmet].armor);
        let glove_armor = (this.state.current_glove == null) ? 0 : parseInt(this.state["gloves"][this.state.current_glove].armor);
        let boots_armor = (this.state.current_boot == null) ? 0 : parseInt(this.state["boots"][this.state.current_boot].armor);
        let sword_armor = (this.state.current_sword == null) ? 0 : parseInt(this.state["swords"][this.state.current_sword].armor);

        let helmet_sword = (this.state.current_helmet == null) ? 0 : parseInt(this.state["helmets"][this.state.current_helmet].attack);
        let glove_sword = (this.state.current_glove == null) ? 0 : parseInt(this.state["gloves"][this.state.current_glove].attack);
        let boots_sword = (this.state.current_boot == null) ? 0 : parseInt(this.state["boots"][this.state.current_boot].attack);
        let sword_sword = (this.state.current_sword == null) ? 0 : parseInt(this.state["swords"][this.state.current_sword].attack);


        if (id === "none") {
            let current_health_sum = parseInt(this.state.initial_health_num)
                + helmet_health
                + glove_health
                + boots_health
                + sword_health;

            let current_armor_sum = parseInt(this.state.initial_armor_num)
                + helmet_armor
                + glove_armor
                + boots_armor
                + sword_armor;

            let current_sword_sum = parseInt(this.state.initial_sword_num)
                + helmet_sword
                + glove_sword
                + boots_sword
                + sword_sword;

            this.setState({
                current_chests_img: null,
                current_health_sum : current_health_sum,
                current_armor_sum : current_armor_sum,
                current_sword_sum : current_sword_sum,
            })
        } else {
            let currentImg = this.state["chests"][id].img;

            let current_health_sum = parseInt(this.state.initial_health_num)
                + parseInt(this.state["chests"][id].health)
                + helmet_health
                + glove_health
                + boots_health
                + sword_health;

            let current_armor_sum = parseInt(this.state.initial_armor_num)
                + parseInt(this.state["chests"][id].armor)
                + helmet_armor
                + glove_armor
                + boots_armor
                + sword_armor;

            let current_sword_sum = parseInt(this.state.initial_sword_num)
                + parseInt(this.state["chests"][id].attack)
                + helmet_sword
                + glove_sword
                + boots_sword
                + sword_sword;

            this.setState({
                current_chests_img : currentImg,
                current_health_sum : current_health_sum,
                current_armor_sum : current_armor_sum,
                current_sword_sum : current_sword_sum,
            });
        }
    }

    onGlovesChangeSelect(event) {
        let id = event.target.value;

        this.state.current_glove = id;

        let helmet_health = (this.state.current_helmet == null) ? 0 : parseInt(this.state["helmets"][this.state.current_helmet].health);
        let chest_health = (this.state.current_chest == null) ? 0 : parseInt(this.state["chests"][this.state.current_chest].health);
        let boots_health = (this.state.current_boot == null) ? 0 : parseInt(this.state["boots"][this.state.current_boot].health);
        let sword_health = (this.state.current_sword == null) ? 0 : parseInt(this.state["swords"][this.state.current_sword].health);

        let helmet_armor = (this.state.current_helmet == null) ? 0 : parseInt(this.state["helmets"][this.state.current_helmet].armor);
        let chest_armor = (this.state.current_chest == null) ? 0 : parseInt(this.state["chests"][this.state.current_chest].armor);
        let boots_armor = (this.state.current_boot == null) ? 0 : parseInt(this.state["boots"][this.state.current_boot].armor);
        let sword_armor = (this.state.current_sword == null) ? 0 : parseInt(this.state["swords"][this.state.current_sword].armor);

        let helmet_sword = (this.state.current_helmet == null) ? 0 : parseInt(this.state["helmets"][this.state.current_helmet].attack);
        let chest_sword = (this.state.current_chest == null) ? 0 : parseInt(this.state["chests"][this.state.current_chest].attack);
        let boots_sword = (this.state.current_boot == null) ? 0 : parseInt(this.state["boots"][this.state.current_boot].attack);
        let sword_sword = (this.state.current_sword == null) ? 0 : parseInt(this.state["swords"][this.state.current_sword].attack);


        if (id === "none") {
            let current_health_sum = parseInt(this.state.initial_health_num)
                + helmet_health
                + chest_health
                + boots_health
                + sword_health;

            let current_armor_sum = parseInt(this.state.initial_armor_num)
                + helmet_armor
                + chest_armor
                + boots_armor
                + sword_armor;

            let current_sword_sum = parseInt(this.state.initial_sword_num)
                + helmet_sword
                + chest_sword
                + boots_sword
                + sword_sword;

            this.setState({
                current_gloves_img: null,
                current_health_sum : current_health_sum,
                current_armor_sum : current_armor_sum,
                current_sword_sum : current_sword_sum,
            })
        } else {
            let currentImg = this.state["gloves"][id].img;

            let current_health_sum = parseInt(this.state.initial_health_num)
                + parseInt(this.state["gloves"][id].health)
                + helmet_health
                + chest_health
                + boots_health
                + sword_health;

            let current_armor_sum = parseInt(this.state.initial_armor_num)
                + parseInt(this.state["gloves"][id].armor)
                + helmet_armor
                + chest_armor
                + boots_armor
                + sword_armor;

            let current_sword_sum = parseInt(this.state.initial_sword_num)
                + parseInt(this.state["gloves"][id].attack)
                + helmet_sword
                + chest_sword
                + boots_sword
                + sword_sword;

            this.setState({
                current_gloves_img : currentImg,
                current_health_sum : current_health_sum,
                current_armor_sum : current_armor_sum,
                current_sword_sum : current_sword_sum,
            });
        }
    }

    onBootsChangeSelect(event) {
        let id = event.target.value;

        this.state.current_boots = id;

        let helmet_health = (this.state.current_helmet == null) ? 0 : parseInt(this.state["helmets"][this.state.current_helmet].health);
        let chest_health = (this.state.current_chest == null) ? 0 : parseInt(this.state["chests"][this.state.current_chest].health);
        let glove_health = (this.state.current_glove == null) ? 0 : parseInt(this.state["gloves"][this.state.current_glove].health);
        let sword_health = (this.state.current_sword == null) ? 0 : parseInt(this.state["swords"][this.state.current_sword].health);

        let helmet_armor = (this.state.current_helmet == null) ? 0 : parseInt(this.state["helmets"][this.state.current_helmet].armor);
        let chest_armor = (this.state.current_chest == null) ? 0 : parseInt(this.state["chests"][this.state.current_chest].armor);
        let glove_armor = (this.state.current_glove == null) ? 0 : parseInt(this.state["gloves"][this.state.current_glove].armor);
        let sword_armor = (this.state.current_sword == null) ? 0 : parseInt(this.state["swords"][this.state.current_sword].armor);

        let helmet_sword = (this.state.current_helmet == null) ? 0 : parseInt(this.state["helmets"][this.state.current_helmet].attack);
        let chest_sword = (this.state.current_chest == null) ? 0 : parseInt(this.state["chests"][this.state.current_chest].attack);
        let glove_sword = (this.state.current_glove == null) ? 0 : parseInt(this.state["gloves"][this.state.current_glove].attack);
        let sword_sword = (this.state.current_sword == null) ? 0 : parseInt(this.state["swords"][this.state.current_sword].attack);


        if (id === "none") {
            let current_health_sum = parseInt(this.state.initial_health_num) +
                + helmet_health
                + chest_health
                + glove_health
                + sword_health;

            let current_armor_sum = parseInt(this.state.initial_armor_num) +
                + helmet_armor
                + chest_armor
                + glove_armor
                + sword_armor;

            let current_sword_sum = parseInt(this.state.initial_sword_num) +
                + helmet_sword
                + chest_sword
                + glove_sword
                + sword_sword;

            this.setState({
                current_boots_img: null,
                current_health_sum : current_health_sum,
                current_armor_sum : current_armor_sum,
                current_sword_sum : current_sword_sum,
            })
        } else {
            let currentImg = this.state["boots"][id].img;

            let current_health_sum = parseInt(this.state.initial_health_num) +
                + parseInt(this.state["boots"][id].health)
                + helmet_health
                + chest_health
                + glove_health
                + sword_health;

            let current_armor_sum = parseInt(this.state.initial_armor_num) +
                + parseInt(this.state["boots"][id].armor)
                + helmet_armor
                + chest_armor
                + glove_armor
                + sword_armor;

            let current_sword_sum = parseInt(this.state.initial_sword_num) +
                + parseInt(this.state["boots"][id].attack)
                + helmet_sword
                + chest_sword
                + glove_sword
                + sword_sword;

            this.setState({
                current_boots_img : currentImg,
                current_health_sum : current_health_sum,
                current_armor_sum : current_armor_sum,
                current_sword_sum : current_sword_sum,
            });
        }
    }

    onSwordsChangeSelect(event) {
        let id = event.target.value;

        this.state.current_sword = id;

        let helmet_health = (this.state.current_helmet == null) ? 0 : parseInt(this.state["helmets"][this.state.current_helmet].health);
        let chest_health = (this.state.current_chest == null) ? 0 : parseInt(this.state["chests"][this.state.current_chest].health);
        let glove_health = (this.state.current_glove == null) ? 0 : parseInt(this.state["gloves"][this.state.current_glove].health);
        let boot_health = (this.state.current_boot == null) ? 0 : parseInt(this.state["boots"][this.state.current_boot].health);

        let helmet_armor = (this.state.current_helmet == null) ? 0 : parseInt(this.state["helmets"][this.state.current_helmet].armor);
        let chest_armor = (this.state.current_chest == null) ? 0 : parseInt(this.state["chests"][this.state.current_chest].armor);
        let glove_armor = (this.state.current_glove == null) ? 0 : parseInt(this.state["gloves"][this.state.current_glove].armor);
        let boot_armor = (this.state.current_boot == null) ? 0 : parseInt(this.state["boots"][this.state.current_boot].armor);

        let helmet_sword = (this.state.current_helmet == null) ? 0 : parseInt(this.state["helmets"][this.state.current_helmet].attack);
        let chest_sword = (this.state.current_chest == null) ? 0 : parseInt(this.state["chests"][this.state.current_chest].attack);
        let glove_sword = (this.state.current_glove == null) ? 0 : parseInt(this.state["gloves"][this.state.current_glove].attack);
        let boot_sword = (this.state.current_boot == null) ? 0 : parseInt(this.state["boots"][this.state.current_boot].attack);


        if (id === "none") {
            let current_health_sum = parseInt(this.state.initial_health_num) +
                + helmet_health
                + chest_health
                + glove_health
                + boot_health;

            let current_armor_sum = parseInt(this.state.initial_armor_num) +
                + helmet_armor
                + chest_armor
                + glove_armor
                + boot_armor;

            let current_sword_sum = parseInt(this.state.initial_sword_num) +
                + helmet_sword
                + chest_sword
                + glove_sword
                + boot_sword;

            this.setState({
                current_swords_img: null,
                current_health_sum : current_health_sum,
                current_armor_sum : current_armor_sum,
                current_sword_sum : current_sword_sum,
            })
        } else {
            let currentImg = this.state["swords"][id].img;

            let current_health_sum = parseInt(this.state.initial_health_num) +
                + parseInt(this.state["swords"][id].health)
                + helmet_health
                + chest_health
                + glove_health
                + boot_health;

            let current_armor_sum = parseInt(this.state.initial_armor_num) +
                + parseInt(this.state["swords"][id].armor)
                + helmet_armor
                + chest_armor
                + glove_armor
                + boot_armor;

            let current_sword_sum = parseInt(this.state.initial_sword_num) +
                + parseInt(this.state["swords"][id].attack)
                + helmet_sword
                + chest_sword
                + glove_sword
                + boot_sword;

            this.setState({
                current_swords_img : currentImg,
                current_health_sum : current_health_sum,
                current_armor_sum : current_armor_sum,
                current_sword_sum : current_sword_sum,
            });
        }
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
                                <select className="form-control" data-info="helmets" onChange={this.onHelmetChangeSelect}>
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
                                <select className="form-control" data-info="chests" onChange={this.onChestChangeSelect}>
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
                                <select className="form-control" data-info="gloves" onChange={this.onGlovesChangeSelect}>
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
                                <select className="form-control" data-info="boots" onChange={this.onBootsChangeSelect}>
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
                                <select className="form-control" data-info="swords" onChange={this.onSwordsChangeSelect}>
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