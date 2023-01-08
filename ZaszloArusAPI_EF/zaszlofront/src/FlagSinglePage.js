import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

export function PizzaSinglePage(props) {
//itt veszi át a paramétereket az App.js-ből a pizzaId-alatt:
    const params = useParams();
    const id = params.pizzaId;
    const[pizza,setPizza] = useState([]);
    const[isPending, setPending] = useState(false);
    useEffect(() => {
        setPending(true);
        //átírtam async-await-esre "simáról":
        // lényege, hogy aszinkron küldi az adatokat, és míg betölt, kirajzolja a pörgettyűt,
        // ha betöltött, akkor pedig a pizza képet és a többi információt.
        (async () => {
            try {
                //itt újabb infó: ha nem ` ` között hanem " " között írjuk be az alábbi kódot,
                // akkor nem megy, mert egyszerűen nem átveszi az id-t, hanem
                // megpróbálja átkódolni html-kódra, ami nem sikerül és hibával tér vissza,
                // illetve a fetch-elés nem hajtódik végre...
        const res= await fetch(`https://localhost:7156/pizza/${id}`)
            const pizza = await res.json();
            setPizza(pizza);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setPending(false);
        }
    })
    ();
 }, [id]);
 // minden egyes id-változásra újra-rendereli az oldalt!
 // ha az id-nél üresen hagyjuk, akkor csak 1x renderelődik le az oldal és vége...

    return (
        <div className="p-5 m-auto text-center content bg-lavender">
            {isPending || !pizza.id ? (
                <div className="spinner-border"></div>
            ) : (
                            <div className="card p-3">
                                <div className="card-body">
                                <h5 className="card-title">{pizza.name}</h5>
                                <div className="lead">Gluténmentes: {pizza.isGlutenFree>0? "igen" : "nem" }</div>
                                    <img alt={pizza.name}
                                    className="img-fluid rounded"
                                    style={{maxHeight: "500px"}}
                                    src={pizza.kepURL ? pizza.kepURL : 
                                    "https://via.placeholder.com/400x800"} 
                                    />
                                  </div>
                                  <div><NavLink to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace" viewBox="0 0 16 16">
  <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
  <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
</svg></NavLink> &nbsp;&nbsp;&nbsp;
<NavLink key="y" to={"/mod-pizza/" + pizza.id}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg></NavLink></div>   
                            </div>
                        
                    )}
                </div>
            );
}
export default PizzaSinglePage;