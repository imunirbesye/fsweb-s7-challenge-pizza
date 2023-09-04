import React, { useState, useEffect, StrictMode } from "react";
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import axios from "axios";

import './SiparisOlustur.css'

const SiparisOlustur = () => {
    const [siparis, setSiparis] = useState({adSoyad: '', pizzaIsmi: 'Position Absolute Acı Pizza', pizzaFiyat: 82.5, pizzaPuan: 4.9, pizzaDegerlendirmeS: 200, pizzaAciklama: 'Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluaşn İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.', pizzaBoyut: '', pizzaHamur: '', ekMalzeme: [], siparisNotu: '', pizzaAdet: 1, toplamTutar: 0});
    const [ekMalzemeler, setEkMalzemeler] = useState([]);
    const [siparisErr, setSiparisErr] = useState({adSoyad: '', pizzaBoyut: '', pizzaHamur: '', siparisNotu: ''});
    const [isDisabled, setIsDisabled] = useState(true);

    const history = useHistory();
/*
    const formSchema = Yup.object().shape({
        adSoyad: Yup
            .string()
            .required("Burası gerekli")
            .min(3)
            .max(30),
        pizzaBoyut: Yup
            .string()
            .required("Yas secilmek zorundadir.")
            .oneOf(["kucuk", "orta", "buyuk"], "Pizza boyutu seçilmelidir."),
        pizzaHamur: Yup
            .string()
            .required("Şehir seçilmek zorundadır.")
            .oneOf(["ince", "incecik", "normal", "kalin"], "Pizza kalınlığı seçilmek zorundadır."),
        siparisNotu: Yup
            .string()
    });*/

    const handleChange = (event) => {
        const { name, value } = event.target;

        /*
        if(name === 'adSoyad' || name === 'pizzaBoyut' || name === 'pizzaHamur' || name === 'siparisNotu'){
            Yup.reach(formSchema, name).validate(value)
                .then(valid => {
                    setSiparisErr({ ...siparisErr, [name]: "" });
                })
                .catch(err => {
                    setSiparisErr({ ...siparisErr, [name]: err.siparisErr[0] });
                })
        } */

        if (name === "ekMalzeme") {
            if(!ekMalzemeler.includes(value))
            {
                console.log(value);
                setEkMalzemeler([...ekMalzemeler, value]); 
            } else {
                let malzemeId = ekMalzemeler.indexOf(value);
                ekMalzemeler.splice(malzemeId, 1);
                console.log(ekMalzemeler);
            } 
        } else {
            setSiparis({...siparis, [name]: value });
        } 
    }

    useEffect(() => {
        setSiparis({ ...siparis, ekMalzeme: [...ekMalzemeler]})
    }, [ekMalzemeler]);
  
    const handleSubmit = () => { 
        console.log("lkdjfgşkljd");
        axios
            .post("https://reqres.in/api/users", JSON.stringify(siparis))
            .then(res => {
                console.log(res);  
                history.push("/order");
            })
            .catch(err => {
                console.log(err.response); 
            });

        console.log(siparis);
    };

    const adetArttir = () => {
        let adet = siparis.pizzaAdet;
        adet++;
        setSiparis({...siparis, pizzaAdet: adet}); 
    };

    const adetAzalt = () => {
        let adet = siparis.pizzaAdet; 
        if(adet > 0)
            adet--;
        setSiparis({...siparis, pizzaAdet: adet});  
    };
 

    /*useEffect(() => {
        formSchema.isValid(siparis)
        .then(valid => {
          setIsDisabled(!valid);
        })
      }, [siparis]);*/

    return (
        <>
            <header>
                <div className="container">
                    <h1>Teknolojik Yemekler</h1>
                    <span>Anasayfa - Seçenekler - <span className="acik-sayfa">Sipariş Oluştur</span></span>
                </div>
            </header>
            <section className="content">
                <div className="container">
                    <form id="pizza-form">
                        <h2>Position Absolute Acı Pizza</h2>
                        <div className="pizza-order-ust-bilgi">
                            <div className="pizza-order-fiyat">85.50₺</div>
                            <div className="pizza-order-puanlama"><span>4.9</span><span>(200)</span></div>
                        </div>
                        <p>
                            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluaşn İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
                        </p>
                        <div className="pizza-boyut-hamur">
                            <div className="pizza-boyut">
                                <h4>Boyut Seç <span style={{color: '#CE2829'}}>*</span></h4>
                                <br />
                                <input
                                    type='radio'
                                    name='pizzaBoyut'
                                    value='kucuk' 
                                    onChange={handleChange} />
                                <label className='pizza-boyut-sec-ic-label'>&nbsp;&nbsp;Küçük</label><br /><br />
                                <input
                                    type='radio'
                                    name='pizzaBoyut'
                                    value='orta' 
                                    onChange={handleChange} />
                                <label className='pizza-boyut-sec-ic-label'>&nbsp;&nbsp;Orta</label><br /><br />
                                <input
                                    type='radio'
                                    name='pizzaBoyut'
                                    value='buyuk' 
                                    onChange={handleChange} />
                                <label className='pizza-boyut-sec-ic-label'>&nbsp;&nbsp;Büyük</label>
                                {siparisErr.pizzaBoyut.length > 0 && <p>{siparisErr.pizzaBoyut}</p>}
                            </div>
                            <div className="pizza-hamur">
                                <h4>Hamur Seç <span style={{color: '#CE2829'}}>*</span></h4><br />
                                <select id='size-dropdown' name='pizzaHamur' onChange={handleChange} >
                                    <option value="">Hamur Kalınlığı</option>
                                    <option value="ince">İnce</option>
                                    <option value="incecik">İncecik</option>
                                    <option value="normal">Normal</option>
                                    <option value="kalin">Kalın</option>
                                </select>
                                {siparisErr.pizzaHamur.length > 0 && <p>{siparisErr.pizzaHamur}</p>}
                            </div>
                        </div>
                        <div className="pizza-ek-malzemeler">
                            <h4>Ek Malzemeler</h4>
                            <span>En Fazla 10 malzeme seçebilirsiniz. 5₺</span>
                            <div className='pizza-ek-malzeme-listesi'>
                                <label><input id='special-text' type='checkbox' name='ekMalzeme' value='pepperoni' onChange={handleChange} />&nbsp;Pepperoni</label>
                                <label><input id='special-text' type='checkbox' name='ekMalzeme' value='domates' onChange={handleChange} />&nbsp;Domates</label>
                                <label><input id='special-text' type='checkbox' name='ekMalzeme' value='biber' onChange={handleChange} />&nbsp;Biber</label>
                                <label><input id='special-text' type='checkbox' name='ekMalzeme' value='sosis' onChange={handleChange} />&nbsp;Sosis</label>
                                <label><input id='special-text' type='checkbox' name='ekMalzeme' value='misir' onChange={handleChange} />&nbsp;Mısır</label>
                                <label><input id='special-text' type='checkbox' name='ekMalzeme' value='sucuk' onChange={handleChange} />&nbsp;Sucuk</label>
                                <label><input id='special-text' type='checkbox' name='ekMalzeme' value='kanadaJambonu' onChange={handleChange} />&nbsp;Kanada Jambonu</label>
                                <label><input id='special-text' type='checkbox' name='ekMalzeme' value='sucuk' onChange={handleChange} />&nbsp;Sucuk</label>
                                <label><input id='special-text' type='checkbox' name='ekMalzeme' value='ananas' onChange={handleChange} />&nbsp;Ananas</label>
                                <label><input id='special-text' type='checkbox' name='ekMalzeme' value='tavukIzgara' onChange={handleChange} />&nbsp;Tavuk Izgara</label>
                                <label><input id='special-text' type='checkbox' name='ekMalzeme' value='jalepeno' onChange={handleChange} />&nbsp;Jalepeno</label>
                                <label><input id='special-text' type='checkbox' name='ekMalzeme' value='kabak' onChange={handleChange} />&nbsp;Kabak</label>
                                <label><input id='special-text' type='checkbox' name='ekMalzeme' value='sogan' onChange={handleChange} />&nbsp;Soğan</label>
                                <label><input id='special-text' type='checkbox' name='ekMalzeme' value='sarimsak' onChange={handleChange} />&nbsp;Sarımsak</label>
                                <label></label>
                            </div>
                        </div>
                        <div className="siparis-ad-soyad">
                            <h3>Ad Soyad</h3>
                            <input type="text" name="adSoyad" placeholder="Ad Soyad" value={siparis.adSoyad}  onChange={handleChange}/>
                            {siparisErr.adSoyad.length > 0 && <p>{siparisErr.adSoyad}</p>}
                        </div>
                        <div className="siparis-notu">
                            <h3>Sipariş Notu</h3>
                            <input type="text" placeholder="Siparişine eklemek istediğin bir not var mı?" name="siparisNotu"  value={siparis.siparisNotu}  onChange={handleChange} id="special-text" />
                        </div>
                        <div className="siparis-sonu">
                            <div className="siparis-adet">
                                <input type="button" name="adetKontrol" value="-" onClick={adetAzalt} />
                                <input type="text" id="pizza-adet-input" name="pizzaAdet" value={siparis.pizzaAdet} onChange={handleChange}/>
                                <input type="button" name="adetKontrol" value="+" onClick={adetArttir} />
                            </div>
                            <div className="siparis-toplam-bilgi">
                                <div className="siparis-bilgi-kutu">
                                    <h3>Sipariş Toplamı</h3>
                                    <div style={{marginBottom:'1%'}}><span>Seçimler</span><span>25.00₺</span></div>
                                    <div><span style={{ color: '#CE2829', fontWeight: 'bold' }}>Toplam</span><span style={{ color: '#CE2829', fontWeight: 'bold' }}>110.50₺</span></div>
                                </div> 
                                    <input type="button" id="order-button" value="SİPARİŞ VER" onClick={handleSubmit} />
                                    {/*
                                        isDisabled === false ?
                                            <button id="order-button" onSubmit={handleSubmit} disabled>SİPARİŞ VER</button>
                                            :
                                            <button id="order-button" onSubmit={handleSubmit} disabled>SİPARİŞ VER</button>*/
                                    } 
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};
export default SiparisOlustur;
