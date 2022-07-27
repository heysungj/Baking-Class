import { useState, useEffect } from "react";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  WeekView,
  Toolbar,
  DateNavigator,
  TodayButton,
  Appointments,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";
import * as productsAPI from "../../utilities/products-api";

export default function ClassCalendar() {
  const [events, setEvents] = useState([]);
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );
  let list = [];

  useEffect(() => {
    const List = async () => {
      const allOrders = await productsAPI.getAllOrders();

      await allOrders.map((order) => {
        let hour = order.classTime.split(":");
        let endHour = parseInt(hour[0]) + 2;
        list = [
          ...list,
          {
            startDate: `${order.startDate}T${order.classTime}`,
            endDate: `${order.startDate}T${endHour}:00`,
            title: order.productName,
          },
        ];
      });
      setEvents(list);
      console.log("event list", list);
    };
    List();
  }, []);

  const changeCurrentDate = (newDate) => setCurrentDate(newDate);

  return (
    <div id="calendar">
      <Scheduler data={events}>
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={changeCurrentDate}
        />
        <EditingState />
        <IntegratedEditing />
        <WeekView startDayHour={9} endDayHour={22} cellDuration={60} />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        {/* <MonthView /> */}
        <Appointments />
        <AppointmentForm />
      </Scheduler>
    </div>
  );
}
