import {h, Component} from 'preact';
import {connect} from 'unistore/preact';

import style from './Players.module.scss';

class Players extends Component {
    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {players, game} = this.props;

        return (
            <header className={style.container}>
                {players.map((player, key) => (
                    <div key={key} className={style.player}>{player}<br/>Points: {game.points[player]} / Wins: {game.wins.filter((e) => {return e === key}).length}</div>
                ))}
                {players.length < 1 &&
                    <div className={style.player && style.noPlayer}>Waiting for players info...</div>
                }
            </header>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('players,game')(Players);
