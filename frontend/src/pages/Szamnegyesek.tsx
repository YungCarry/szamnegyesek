import { Button, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Szamnegyesek = () => {
    var a = 0;
    var ab = 0;
    var b = 0;
    var ac = 0;
    var k = 0;
    var bd = 0;
    var c = 0;
    var cd = 0;
    var d = 0;

    const a_table = () => {
        a = a+1;
        ab = ab+1;
        ac = ac+1;
        k = k+1;

     }

     const b_table = () => {
        ab = ab+1;
        b = b+1;
        bd = bd+1;
        k = k+1;
     }

     const c_table = () => { 
        ac = ac+1;
        k = k+1;
        c = c+1;
        cd = cd+1;
     }

     const d_table = () => { 
        bd = bd+1;
        k = k+1;
        c = c+1;
        cd = cd+1;
     }

     const clear = () => { 
        a = 0;
        ab = 0;
        b = 0;
        ac = 0;
        k = 0;
        bd = 0;
        c = 0;
        cd = 0;
        d = 0;
      }

    
    return (
        <div>
            <h1>Számnégyesek</h1>
            <Table>
                <tbody>
                    <tr>
                        <td>{a}</td>
                        <td>{ab}</td>
                        <td>{b}</td>
                    </tr>
                    <tr>
                        <td>{ac}</td>
                        <td>{k}</td>
                        <td>{bd}</td>
                    </tr>

                    <tr>
                        <td>{c}</td>
                        <td>{cd}</td>
                        <td>{d}</td>
                    </tr>
                </tbody>
            </Table>

            <Button onClick={a_table}>A tábla</Button>
            <Button onClick={b_table}>B tábla</Button>
            <Button onClick={c_table}>C tábla</Button>
            <Button onClick={d_table}>D tábla</Button>
            <Button onClick={clear}>Törlés</Button>
            
        </div>
    )
}

export default Szamnegyesek;