import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AuthProvider from '../contexts/AuthProvider';
import PrivateRoute from '../routes/PrivateRoute';
import AddProductScreen from './AddProductScreen';
import ManageProductScreen from './ManageProductScreen';
import SideNav from './SideNav';

const Admin = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <main className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-10">
                    <div className="col-span-1">
                        <SideNav />
                    </div>
                    <div className="col-span-4 my-24 px-6">
                        <Switch>
                            <PrivateRoute exact path="/admin/manage-products">
                                <ManageProductScreen />
                            </PrivateRoute>
                            <PrivateRoute exact path="/admin/add">
                                <AddProductScreen />
                            </PrivateRoute>
                        </Switch>
                    </div>

                </main>                
            </AuthProvider>
        </BrowserRouter>
    )
}

export default Admin
