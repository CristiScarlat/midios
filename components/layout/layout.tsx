import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Layout as AntLayout } from 'antd'
import { Ctx } from '../../context/context'
import styles from './layout.module.scss'

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
    const router = useRouter()
    //@ts-ignore
    const { authUser } = React.useContext(Ctx)
    const { Header, Content, Footer } = AntLayout

    return (
        <>
            <Head>
                <title>MidiOS</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <AntLayout className="layout">
                <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1 style={{ color: 'white' }}>Midi OS</h1>
                    <div className={styles.fixedHeader}>
                        <Link href="/">
                            <a className={router.pathname === '/' ? styles.active : undefined}>Home</a>
                        </Link>
                        {authUser ? (
                            <Link href="/login">
                                <a>Logout</a>
                            </Link>
                        ) : (
                            <Link href="/login">
                                <a className={router.pathname === '/login' ? styles.active : undefined}>Login</a>
                            </Link>
                        )}
                    </div>
                </Header>
                <Content style={{ padding: '1rem', overflow: 'auto' }}>{children}</Content>
                <Footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#e6e8eb' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </AntLayout>
        </>
    )
}

export default Layout
