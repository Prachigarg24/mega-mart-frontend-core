import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { RootState } from '@/store/store';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Package, ShoppingCart, TrendingUp, 
  DollarSign, Eye, Edit, Trash2, Search,
  Filter, Download, Plus
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import toast from 'react-hot-toast';

const Admin = () => {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Check if admin
  if (!isAuthenticated || user?.email !== 'admin@megamart.com') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
            <p className="text-muted-foreground mb-4">You need admin privileges to access this page</p>
            <Button onClick={() => navigate('/')} className="w-full">
              Go to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Mock admin data
  const stats = {
    totalOrders: 1247,
    totalRevenue: 2845670,
    totalProducts: 350,
    totalUsers: 3521,
    ordersGrowth: '+12.5%',
    revenueGrowth: '+18.2%',
    productsGrowth: '+5.3%',
    usersGrowth: '+23.1%'
  };

  const recentOrders = JSON.parse(localStorage.getItem('megamart_orders') || '[]').slice(0, 10);
  const subscribers = JSON.parse(localStorage.getItem('megamart_subscribers') || '[]');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/80 to-secondary/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                Welcome back, {user?.name}! Here's what's happening today.
              </p>
            </div>
            <Button className="btn-hero">
              <Plus className="w-4 h-4 mr-2" />
              New Product
            </Button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card className="hover-scale">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold mt-1">{stats.totalOrders.toLocaleString()}</p>
                  <Badge className="mt-2 bg-green-100 text-green-700">{stats.ordersGrowth}</Badge>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold mt-1">{formatPrice(stats.totalRevenue)}</p>
                  <Badge className="mt-2 bg-green-100 text-green-700">{stats.revenueGrowth}</Badge>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Products</p>
                  <p className="text-2xl font-bold mt-1">{stats.totalProducts}</p>
                  <Badge className="mt-2 bg-green-100 text-green-700">{stats.productsGrowth}</Badge>
                </div>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold mt-1">{stats.totalUsers.toLocaleString()}</p>
                  <Badge className="mt-2 bg-green-100 text-green-700">{stats.usersGrowth}</Badge>
                </div>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
            </TabsList>

            {/* Orders Tab */}
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Orders</CardTitle>
                    <div className="flex gap-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          placeholder="Search orders..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-9 w-[200px]"
                        />
                      </div>
                      <Button variant="outline" size="icon">
                        <Filter className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {recentOrders.length > 0 ? (
                    <div className="space-y-4">
                      {recentOrders.map((order: any) => (
                        <div key={order.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <Package className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">Order {order.id}</p>
                              <p className="text-sm text-muted-foreground">
                                {new Date(order.date).toLocaleDateString('en-IN')} • {order.items.length} items
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="font-semibold">{formatPrice(order.total)}</p>
                              <Badge className="bg-green-100 text-green-700 capitalize">
                                {order.status}
                              </Badge>
                            </div>
                            <div className="flex gap-1">
                              <Button variant="ghost" size="icon">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <Package className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>No orders yet</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-muted-foreground">
                    <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>User management features coming soon</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Subscribers Tab */}
            <TabsContent value="subscribers">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Email Subscribers ({subscribers.length})</CardTitle>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {subscribers.length > 0 ? (
                    <div className="space-y-2">
                      {subscribers.map((email: string, index: number) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="text-xs font-semibold text-primary">
                                {index + 1}
                              </span>
                            </div>
                            <span className="font-medium">{email}</span>
                          </div>
                          <Button variant="ghost" size="sm" onClick={() => {
                            const newSubscribers = subscribers.filter((e: string) => e !== email);
                            localStorage.setItem('megamart_subscribers', JSON.stringify(newSubscribers));
                            toast.success('Subscriber removed');
                            setTimeout(() => window.location.reload(), 500);
                          }}>
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>No subscribers yet</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Admin;
