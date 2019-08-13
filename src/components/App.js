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

            health_num : 0,
            person_health : 0,
            shield_num : 0,
            person_shield : 0,
            sword_num : 0,
            person_sword : 0,
            priceCount : 0,
            person_price : 0,

            current_helmets_img : "",
            current_chests_img : "",
            current_gloves_img : "",
            current_boots_img : "",
            current_swords_img : "",

            current_helmet : 0,
            current_chest : 0,
            current_glove : 0,
            current_boot : 0,
            current_sword : 0,
            
            current_health_sum : 0,
            current_person_health_sum : 0,
            current_armor_sum : 0,
            current_person_armor_sum : 0,
            current_attack_sum : 0,
            current_person_attack_sum : 0,

        };

        this.onHelmetChangeSelect = this.onHelmetChangeSelect.bind(this);
        this.onChestChangeSelect = this.onChestChangeSelect.bind(this);
        this.onGlovesChangeSelect = this.onGlovesChangeSelect.bind(this);
        this.onBootsChangeSelect = this.onBootsChangeSelect.bind(this);
        this.onSwordsChangeSelect = this.onSwordsChangeSelect.bind(this);
    }


    onHelmetChangeSelect(event) {
        let id = event.target.value;

        if (id == "null") {
            let current_girl_img = this.state.person_img;

            this.setState({
                girl_img : current_girl_img,
                person_health : +this.state.health_num,
                person_shield : +this.state.shield_num,
                person_sword : +this.state.sword_num,
                person_price : this.state.priceCount,
            })
        }
        else {
            let newHeartCount = +this.state.health_num + +(this.state["helmets"][id].health);
            let newShieldCount = +this.state.shield_num + +(this.state["helmets"][id].armor);
            let newSwordCount = +this.state.sword_num + +(this.state["helmets"][id].attack);
            let price = this.state.priceCount + +(this.state["helmets"][id].price);
            let currentImg = this.state["helmets"][id].img;


            this.setState({
                person_health : newHeartCount,
                person_shield : newShieldCount,
                person_sword : newSwordCount,
                person_price : price,
                current_helmets_img : currentImg,
            });
        }

    }

    onChestChangeSelect(event) {
        let id = event.target.value;
        let newHeartCount = +this.state.health_num + +(this.state["chests"][id].health);
        let newShieldCount = +this.state.shield_num + +(this.state["chests"][id].armor);
        let newSwordCount = +this.state.sword_num + +(this.state["chests"][id].attack);
        let price = this.state.priceCount + +(this.state["chests"][id].price);
        let currentImg = this.state["chests"][id].img;
        this.setState({
            person_health : newHeartCount,
            person_shield : newShieldCount,
            person_sword : newSwordCount,
            person_price : price,
            current_chests_img : currentImg
        });
    }

    onGlovesChangeSelect(event) {
        let id = event.target.value;
        let newHeartCount = +this.state.health_num + +(this.state["gloves"][id].health);
        let newShieldCount = +this.state.shield_num + +(this.state["gloves"][id].armor);
        let newSwordCount = +this.state.sword_num + +(this.state["gloves"][id].attack);
        let price = this.state.priceCount + +(this.state["gloves"][id].price);
        let currentImg = this.state["gloves"][id].img;
        this.setState({
            person_health : newHeartCount,
            person_shield : newShieldCount,
            person_sword : newSwordCount,
            person_price : price,
            current_gloves_img : currentImg
        });
    }

    onBootsChangeSelect(event) {
        let id = event.target.value;
        let newHeartCount = +this.state.health_num + +(this.state["boots"][id].health);
        let newShieldCount = +this.state.shield_num + +(this.state["boots"][id].armor);
        let newSwordCount = +this.state.sword_num + +(this.state["boots"][id].attack);
        let price = this.state.priceCount + +(this.state["boots"][id].price);
        let currentImg = this.state["boots"][id].img;
        this.setState({
            person_health : newHeartCount,
            person_shield : newShieldCount,
            person_sword : newSwordCount,
            person_price : price,
            current_boots_img : currentImg
        });
    }

    onSwordsChangeSelect(event) {
        let id = event.target.value;
        let newHeartCount = +this.state.health_num + +(this.state["swords"][id].health);
        let newShieldCount = +this.state.shield_num + +(this.state["swords"][id].armor);
        let newSwordCount = +this.state.sword_num + +(this.state["swords"][id].attack);
        let price = this.state.priceCount + +(this.state["swords"][id].price);
        let currentImg = this.state["swords"][id].img;
        this.setState({
            person_health : newHeartCount,
            person_shield : newShieldCount,
            person_sword : newSwordCount,
            person_price : price,
            current_swords_img : currentImg
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
                    health_num : commits[0].person.health,
                    shield_num : commits[0].person.armor,
                    sword_num : commits[0].person.attack,
                    priceCount : 0,
                    person_price : 0,
                    person_health : commits[0].person.health,
                    person_shield : commits[0].person.armor,
                    person_sword : commits[0].person.attack,
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
                                    <option value="null">Выберите элемент</option>
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
                                    <option value="null">Выберите элемент</option>
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
                                    <option value="null">Выберите элемент</option>
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
                                    <option value="null">Выберите элемент</option>
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
                                    <option value="null">Выберите элемент</option>
                                    {this.state.swords.map((item, index) =>
                                        <option key={index} value={item.id}>{item.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="cost">Equipment cost: {this.state.person_price}</div>

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
                                <span>{this.state.person_health}</span>
                                <img className="heart__img" src={this.state.heart_path} alt=""/>
                            </div>

                            <div className="shieldMain">
                                <span className="shield_num">{this.state.person_shield}</span>
                                <img className="shield__img" src={this.state.shield_path} alt=""/>
                            </div>

                            <div className="swordMain">
                                <span className="sword_num">{this.state.person_sword}</span>
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