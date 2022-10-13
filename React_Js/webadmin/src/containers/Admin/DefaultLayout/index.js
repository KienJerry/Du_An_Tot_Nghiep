import Header from '../PageAdmin/Header/indexHeaderAdmin';
import MenuNavigation from '../../pages/Menu/Menu_navigate/index_menu';
import Footer from '../PageAdmin/Footer/indexFooterAdmin';
import { Layout } from 'antd';
const { Content } = Layout;

export default function DefaultLayout({ children }) {
    return (
        <Layout hasSider>
            <MenuNavigation />
            <Layout style={{ height: '100vh' }}>
                <Header />
                <Content style={{ margin: '70px 16px 10px 30vh' }}>
                    {children}
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
}