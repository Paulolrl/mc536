// Generated by https://pagedraw.io/pages/10133
import React from 'react';
import Menu from './menu';
import Partida from './partida';
import './tela_partidas.css';


function render() {
    return <div className="tela_partidas-tela_partidas-7">
        <div className="tela_partidas-0">
            <div className="tela_partidas-menu_instance_2">
                <Menu img_src={""} /> 
            </div>
        </div>
        <div className="tela_partidas-1">
            <div className="tela_partidas-rectangle_4">
                <div className="tela_partidas-1-0-0">
                    <div className="tela_partidas-text_4">Partidas</div>
                </div>
            </div>
        </div>
        <div className="tela_partidas-2">
            <div className="tela_partidas-rectangle_5">
                <div className="tela_partidas-2-0-0">
                    <div className="tela_partidas-partida_instance-8">
                        <Partida /> 
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}
