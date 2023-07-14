import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom'
import './AdaptiveMenu.scss'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return
            }

            setState({ ...state, [anchor]: open })
        }

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                height: '844px',
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home'].map(() => (
                    <Link
                        style={{
                            textDecoration: 'none',
                            paddingLeft: '10px',
                            color: '#ac8a62',
                        }}
                        to="/"
                    >
                        Home
                    </Link>
                ))}
            </List>
            <List>
                {['About'].map(() => (
                    <Link
                        style={{
                            textDecoration: 'none',
                            paddingLeft: '10px',
                            color: '#ac8a62',
                        }}
                        to="/about"
                    >
                        About
                    </Link>
                ))}
            </List>
            <List>
                {['Our Services'].map(() => (
                    <Link
                        style={{
                            textDecoration: 'none',
                            paddingLeft: '10px',
                            color: '#ac8a62',
                        }}
                        to="/favorites"
                    >
                        Favorites
                    </Link>
                ))}
            </List>
            <List>
                {['Contact Us'].map(() => (
                    <Link
                        style={{
                            textDecoration: 'none',
                            paddingLeft: '10px',
                            color: '#ac8a62',
                        }}
                        to="/adventures"
                    >
                        Adventures
                    </Link>
                ))}
            </List>
            <List>
                {['Our Services'].map(() => (
                    <Link
                        style={{
                            textDecoration: 'none',
                            paddingLeft: '10px',
                            color: '#ac8a62',
                        }}
                        to="/places"
                    >
                        Places
                    </Link>
                ))}
            </List>
            <List>
                {['Contact Us'].map(() => (
                    <Link
                        style={{
                            textDecoration: 'none',
                            paddingLeft: '10px',
                            color: '#ac8a62',
                        }}
                        to="/guides"
                    >
                        Guides
                    </Link>
                ))}
            </List>

            <Divider />
        </Box>
    )

    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button
                        className="AdaptiveMenuButton"
                        onClick={toggleDrawer(anchor, true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="43"
                            style={{ color: 'black', cursor: 'pointer' }}
                            className="bi bi-list"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                    </Button>
                    <Drawer
                        className="AdaptiveMenu"
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        <div className="links_in_adaptive">{list(anchor)}</div>
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    )
}
