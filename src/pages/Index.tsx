import { Check, Crown, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 flex items-center">
          <div className="font-bold text-xl">hostex</div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <NavItem icon="grid" label="Dashboard" />
          <NavItem icon="inbox" label="Inbox" />
          <NavItem icon="calendar" label="Calendar" />
          <NavItem icon="dollar-sign" label="Price" />
          <NavItem icon="home" label="Properties" />
          <NavItem icon="check-square" label="Tasks" />
          <NavItem icon="star" label="Reviews" />
          <NavItem icon="settings" label="Automation" active />
          <NavItem icon="briefcase" label="Workplace" />
          <NavItem icon="link" label="Booking Site" />
          <NavItem icon="bar-chart-2" label="Metrics" />
          <NavItem icon="users" label="Connected Accounts" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Automation</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Crown className="h-4 w-4" />
              <span>Subscription</span>
            </Button>
            <Button variant="ghost" size="icon">
              <span className="sr-only">History</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </Button>
            <Button variant="ghost" size="icon">
              <span className="sr-only">Notifications</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </Button>
            <div className="flex items-center">
              <Avatar className="h-8 w-8">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-gray-200">
          <Tabs defaultValue="review" className="w-full">
            <TabsList className="h-12 w-full justify-start bg-transparent border-b px-6">
              <TabsTrigger value="overview" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">Overview</TabsTrigger>
              <TabsTrigger value="message" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">Message</TabsTrigger>
              <TabsTrigger value="review" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">Review</TabsTrigger>
              <TabsTrigger value="price" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">Price</TabsTrigger>
              <TabsTrigger value="task" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">Task</TabsTrigger>
              <TabsTrigger value="gap" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">Gap Management</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Filter Buttons */}
        <div className="p-6 flex justify-between">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Event</Button>
            <Button variant="outline" size="sm">Property</Button>
            <Button variant="outline" size="sm">Channel</Button>
            <Button variant="outline" size="sm">Channel account</Button>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Review Templates</Button>
            <Button variant="default" size="sm">New rule</Button>
          </div>
        </div>

        {/* Table */}
        <div className="px-6 flex-1">
          <div className="bg-white rounded-md border border-gray-200">
            <div className="grid grid-cols-7 p-4 text-sm text-gray-500 border-b">
              <div className="col-span-1">Enabled</div>
              <div className="col-span-1">Event</div>
              <div className="col-span-1">Content</div>
              <div className="col-span-1">Property</div>
              <div className="col-span-1">Room type</div>
              <div className="col-span-1">Channel</div>
              <div className="col-span-1">Channel Account</div>
            </div>

            <AutomationRow 
              enabled={true}
              event="1 day after check-out at 12:00"
              content="1111"
              property="3 properties"
              roomType="0 room type"
              channel={<AirbnbChannel />}
              account="274440378@qq.com"
              creator="Self"
            />

            <AutomationRow 
              enabled={true}
              event="1 day after check-out at 03:00"
              content="test001"
              property="0 properties"
              roomType="0 room type"
              channel="All"
              account="anson20223@gmail.com"
              creator="Self"
            />

            <AutomationRow 
              enabled={true}
              event="1 day after check-out at 13:00"
              content="test all properties"
              property="All"
              roomType="All"
              channel="All"
              account="All"
              creator="Self"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active = false }) => {
  const getIcon = (name) => {
    switch (name) {
      case 'grid':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;
      case 'inbox':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>;
      case 'calendar':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
      case 'dollar-sign':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
      case 'home':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
      case 'check-square':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>;
      case 'star':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
      case 'settings':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
      case 'briefcase':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
      case 'link':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
      case 'bar-chart-2':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>;
      case 'users':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
      default:
        return null;
    }
  };

  return (
    <div className={`flex items-center p-2 rounded-md ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
      <div className="mr-3">{getIcon(icon)}</div>
      <span>{label}</span>
    </div>
  );
};

const AirbnbChannel = () => (
  <div className="flex items-center">
    <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm6.798 9.233-1.769-5.88c-.324-1.076-1.04-1.769-2.016-1.769-.551 0-1.122.229-1.621.71-.454.438-.898.438-1.354 0-.499-.481-1.07-.71-1.621-.71-.976 0-1.692.693-2.016 1.769l-1.769 5.88c-.163.543-.032 1.112.357 1.621.324.422.8.67 1.313.67.206 0 .413-.032.619-.097l2.276-.768c.206-.065.413-.097.619-.097s.413.032.619.097l2.276.768c.206.065.413.097.619.097.513 0 .989-.249 1.313-.67.389-.509.52-1.078.357-1.621zm-4.798 4.767c-2.184 0-4.208.327-5.817.981-1.612.654-2.183 1.435-2.183 2.019 0 .583.571 1.364 2.183 2.019 1.609.653 3.633.981 5.817.981 2.184 0 4.208-.328 5.817-.981 1.612-.655 2.183-1.436 2.183-2.019 0-.584-.571-1.365-2.183-2.019-1.609-.654-3.633-.981-5.817-.981z"/>
      </svg>
    </div>
  </div>
);

const AutomationRow = ({ enabled, event, content, property, roomType, channel, account, creator }) => {
  return (
    <div className="grid grid-cols-8 p-4 text-sm border-b hover:bg-gray-50">
      <div className="col-span-1 flex items-center">
        <div className="h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center text-blue-600">
          <Check className="h-5 w-5" />
        </div>
      </div>
      <div className="col-span-1 flex items-center">{event}</div>
      <div className="col-span-1 flex items-center">{content}</div>
      <div className="col-span-1 flex items-center">{property}</div>
      <div className="col-span-1 flex items-center">{roomType}</div>
      <div className="col-span-1 flex items-center">
        {typeof channel === 'string' ? channel : channel}
      </div>
      <div className="col-span-1 flex items-center">{account}</div>
      <div className="col-span-1 flex items-center justify-between">
        <span>{creator}</span>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Index;