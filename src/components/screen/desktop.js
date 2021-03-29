import React, { Component } from 'react'
import RegisterApp from '../base/register_app';
import BackgroundImage from '../util components/background-image'

export class Desktop extends Component {
    constructor() {
        super();
        this.icons = {
            chrome: "./themes/Yaru/apps/google_chrome_48.png",
            trash: "./themes/Yaru/system/user-trash-full.png",
            home_folder: "./themes/Yaru/system/user-home.png"
        }
        this.state = {
            focused_windows: {
                "chrome": false,
                "trash": false,
                "home": false,
            },
            closed_windows: {
                "chrome": true,
                "trash": true,
                "home": true,
            }
        }
    }

    openApp = (objId) => {
        let closed_windows = this.state.closed_windows;
        closed_windows[objId] = false;
        this.setState({ closed_windows }, this.focus(objId));
    }

    closeApp = (objId) => {
        let closed_windows = this.state.closed_windows;
        closed_windows[objId] = true;
        this.setState({ closed_windows });
    }

    focus = (objId) => {
        // removes focus from all window and 
        // gives focus to window with 'id = objId'
        var focused_windows = this.state.focused_windows;
        focused_windows[objId] = true;
        for (let key in focused_windows) {
            if (focused_windows.hasOwnProperty(key)) {
                if (key !== objId) {
                    focused_windows[key] = false;
                }
            }
        }
        this.setState({ focused_windows });
    }

    render() {
        return (
            <div className="h-full w-full pt-6 bg-transparent relative overflow-hidden overscroll-none window-parent">
                <BackgroundImage img={this.props.bg_img_path} />

                <RegisterApp name="Google Chrome" id="chrome" icon={this.icons.chrome} position={{ top: 40, right: 4 }} disabled={false} openApp={this.openApp} closeApp={this.closeApp} focus={this.focus} focused_windows={this.state.focused_windows} closed_windows={this.state.closed_windows} />
                <RegisterApp name="Trash" id="trash" icon={this.icons.trash} position={{ top: 40 + 80 * 1 + 3, right: 4 }} disabled={true} openApp={this.openApp} closeApp={this.closeApp} focus={this.focus} focused_windows={this.state.focused_windows} closed_windows={this.state.closed_windows} />
                <RegisterApp name="Vivek" id="home" icon={this.icons.home_folder} position={{ top: 43 + 80 * 2 + 3, right: 4 }} disabled={true} openApp={this.openApp} closeApp={this.closeApp} focus={this.focus} focused_windows={this.state.focused_windows} closed_windows={this.state.closed_windows} />

            </div>
        )
    }
}

export default Desktop
