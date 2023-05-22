import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class About extends Component {

    render() {

        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Truyền thông nói gì về Lưu Hải
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="80%" height="380px"
                            src="https://www.youtube.com/embed/-lqkmapAuZc?list=RD-lqkmapAuZc"
                            title="In The Shadow Of The Sun (Original Mix) - Professor Green (Kain Music) ♪ || 全网热播BGM | 抖音 | TikTok"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="content-right">
                        <p>
                            Sáng cũng bác sĩ Hải,
                            Trưa cũng bác sĩ Hải,
                            Tối cũng bác sĩ Hải,
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
