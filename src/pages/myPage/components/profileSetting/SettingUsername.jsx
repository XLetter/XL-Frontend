import React, { Component } from "react";
import "./SettingUsername.css";

class SettingUsername extends Component {
    state = {
        nickname: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.nickname]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <table className="set_nickname">
                    <tr>
                        <td>
                            <input type="text" className='input_nickname' placeholder={"Enter your nickname"} name="nickname" />
                            <button className="inputBtn" onClick={this.handleChange}>
                                save!
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default SettingUsername;

/*

<form>
                    <input
                    placeholder="Enter Your Nickname"
                    value={this.state.nickname}
                    name = "nickname"
                    />
                    <button onClick={this.handleChange}>
                        save!
                    </button>

                    <h3>{this.state.nickname}</h3>
                </form> 



*/