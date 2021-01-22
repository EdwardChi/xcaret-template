import React, { Fragment } from 'react';
import './assets/css/tailwind.css';
import './assets/scss/app.scss';
import Carousel from './components/carousel/carousel';
import Header from './components/header/header';
import Tab from './components/tabs/tab';
import Admision from './views/admision/admision';
import IndexAdmision from './views/admision/index_admision';
import IndexFooter from './views/footer/index_footer';
import Recommendations from './views/recommendations/recommendations';
import Cart from './components/cart/cart';
import CardRSP from './components/card-rsp/card-rsp';
import reducers from './reducers/';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import { loadState2 , saveState} from './actions/index_action';
import { creat_url } from './helpers/peticiones';

const data_example = [
    {
        title: "Primer tab",
        id: "first",
        data: <ul className="list-circle list-inside font-semibold">
            <li>Nibh mi nam nisi augue a vulputate pulvinar fermentum ipsum ornare congue</li>
            <li>Lorem egestas dictumst pharetra euismod urna bibendum ullamcorper interdum</li>
            <li>Lorem metus venenatis ad conubia</li>
            <li>Libero fermentum sodales eros congue orci porttitor et augue sodales nulla habitasse duis egestas</li>
            <li>Nulla euismod per feugiat risus ullamcorper mattis sodales odio felis vivamus viverra</li>
            <li>Class auctor sodales vel ligula</li>
            <li>Lobortis tristique proin ultrices inceptos potenti velit sapien ante habitasse porttitor suspendisse</li>
            <li>Hendrerit facilisis eleifend ultricies sem venenatis aliquam et eros sodales</li>
        </ul>
    },
    {
        title: "Segundo tab",
        id: "second",
        data: "Nibh mi nam nisi augue a vulputate pulvinar fermentum ipsum ornare congue"
    },
    {
        title: "Segundo tab",
        id: "third",
        data: "Nibh mi nam nisi augue a vulputate pulvinar fermentum ipsum ornare congue"
    }
]

const what_is = [
    {
        title: "¿QUÉ ES XCARET?",
        id: "que_es",
        data: <div className="p-2 text-lg text-black">
            Xcaret es el parque en Playa del Carmen con más de 50 atracciones naturales y culturales
            donde te reencuentras con la naturaleza en su maravilloso marco rico en fauna y flora;
            y con México, en atracciones que te recuerdan lo grandiosa que es esta tierra. Descrubre
            porque Xcaret es el lugar más emblematico de la Riviera Maya.
        </div>
    },
    {
        title: "QUE INCLUYE",
        id: "que_incluye",
        data: <div className="p-2 text-lg text-black">
            <p>
                Darn outside much heroically far chortled one among less the reindeer capybara orca
                far smooched subconscious this miraculously single-minded more scorpion ouch some
                darn along decidedly tarantula this one oh hello aimlessly soggily some when far
                hey crud due more hence concentrically less and far.
            </p>
        </div>
    },
    {
        title: "RECOMENDACIONES",
        id: "recomen",
        data: <div className="p-2 text-lg text-black">
            Xcaret es el parque en Playa del Carmen con más de 50 atracciones naturales y culturales
            donde te reencuentras con la naturaleza en su maravilloso marco rico en fauna y flora;
            y con México, en atracciones que te recuerdan lo grandiosa que es esta tierra. Descrubre
            porque Xcaret es el lugar más emblematico de la Riviera Maya.
        </div>
    },
    {
        title: "INFORMACIÓN IMPORTANTE",
        id: "info_imp",
        data: <div className="p-2 text-lg text-black">
            Xcaret es el parque en Playa del Carmen con más de 50 atracciones naturales y culturales
            donde te reencuentras con la naturaleza en su maravilloso marco rico en fauna y flora;
            y con México, en atracciones que te recuerdan lo grandiosa que es esta tierra. Descrubre
            porque Xcaret es el lugar más emblematico de la Riviera Maya.
        </div>
    }
]


const data_recom = [
    {
        title: 'XCARET PLUS',
        image: creat_url(400,250,'FF000'),
        price: '435'
    },
    {
        title: 'XCARET PRO',
        image: creat_url(400,250,'FF000'),
        price: '75'
    },
    {
        title: 'XPLOR FUEGO',
        image: creat_url(400,250,'FF000'),
        price: '75'
    }
]


const initialData = loadState2()
const store = createStore(reducers, initialData);

store.subscribe( function () {
    saveState(store.getState())
})

function App() {
    return (
        <Fragment>
            <Provider store={store}>
                <div className="">
                    <Header />
                    <div className="lg:hidden block pt-12">
                        <Admision data={data_example} movil={true} />
                    </div>
                    <Carousel />
                    <IndexAdmision data_adm={data_example} />
                    <div className="lg:hidden block relative">
                        <Tab
                            classType="tab_primary"
                            data={what_is}
                            movil={"true2222"}
                        />
                    </div>
                    <Recommendations data_recom={data_recom}/>
                    <div className="lg:hidden block pt-12">
                        <CardRSP />
                    </div>
                    <IndexFooter />
                    <Cart />
                </div>
            </Provider>
        </Fragment>
    );
}

export default App;
