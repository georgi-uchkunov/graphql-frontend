import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';
import Register from '../Register';
import Login from '../Login';
import UserMenu from '../UserMenu';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    componentDidMount = () => {
        this.props.getCurrentUser();
    }

    render() {
        return <Navbar color="action" dark expand="md">
            <Container>
                <NavLink
                    tag={RRNavLink}
                    className="navbar-brand"
                    exact to="/">
                    <i class="fa fa-film mr-3"></i>
                    <span className="project-name">Movies Graphql</span>
                </NavLink>
            <NavbarToggler onClick={this.toggleIsOpen} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/"
                            activeClassName="active">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/movies"
                            activeClassName="active">
                            Movies
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/protected"
                            activeClassName="active">
                            Protected
                        </NavLink>
                    </NavItem>
                    {this.props.token ? (
                            <UserMenu/>
                    ) : (
                        <>
                            <Register buttonLabel="Register"/>
                            <Login buttonLabel="Sign In"/>
                        </>
                    )}
                </Nav>
            </Collapse>
            </Container>
        </Navbar>
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
    }
};

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        getCurrentUser: actions.getCurrentUser,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(Header);
