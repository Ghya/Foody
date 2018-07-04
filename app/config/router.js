/**
 * Router component
 * Use React-Native-Router-Flux
 *
 * Contains tabbar with 4 sections
 * Meal - Planning - Shop - Options
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

// COMPONENTS IMPORT
import { Icon } from '../components/common';

// PAGE IMPORT
// ==== Login Page ====
import Login from '../screens/Login/Login';

// ==== Meal Page ====
import MealHome from '../screens/Meal/MealHome';
import MealSelection from '../screens/Meal/MealSelection';
import MealCreate from '../screens/Meal/MealCreate';
import MealPrimary from '../screens/Meal/MealPrimary';
import MealSecondary from '../screens/Meal/MealSecondary';
import MealValidation from '../screens/Meal/MealValidation';
import MealCalendar from '../screens/Meal/MealCalendar';

// ==== Lab Page ====
import Lab from '../screens/Lab/Lab';

// ==== Calendar Page ====
import CalendarHome from '../screens/Calendar/CalendarHome';

// ==== Shop Page ====
import ShopHome from '../screens/Shop/ShopHome';
import ShopDateSelection from '../screens/Shop/ShopDateSelection';
import ShopCreateList from '../screens/Shop/ShopCreateList';
import ShopList from '../screens/Shop/ShopList';

// ==== Option Page ====
import Options from '../screens/Options/Options';

const TabIconeMeal = () => <Icon name="restaurant" color="#000" size={25} />;
const TabIconePlanning = () => <Icon name="calendar" color="#000" size={25} />;
const TabIconeShop = () => <Icon name="cart" color="#000" size={25} />;
const TabIconeOption = () => <Icon name="settings" color="#000" size={25} />;

/**
 * RouterComponent
 */

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene
        key="tabbar"
        tabs
        tabBarPosition="bottom"
        tabBarStyle={{ backgroundColor: '#FFF' }}
      >
        {/* ============= MEAL TAB SECTION ============= */}

        <Scene key="mealTab" title="Repas" icon={TabIconeMeal}>
          <Scene key="mealHomePage" component={MealHome} title="Repas" initial />
          <Scene key="mealSelectionPage" component={MealSelection} title="Mes Plats" />
          <Scene key="mealCreatePage" component={MealCreate} title="Créer un plat" />
          <Scene
            key="mealPrimaryPage"
            component={MealPrimary}
            title="Element principal"
          />
          <Scene
            key="mealSecondaryPage"
            component={MealSecondary}
            title="Accompagnement"
          />
          <Scene
            key="mealValidationPage"
            component={MealValidation}
            title="Résumé du plat"
          />
          <Scene
            key="mealCalendarPage"
            component={MealCalendar}
            title="Choix de la date"
          />
        </Scene>

        {/* ============= PLANNING TAB SECTION ============= */}

        <Scene key="calendarTab" title="Planning" icon={TabIconePlanning}>
          <Scene key="calendarPage" component={CalendarHome} title="Planning" initial />
        </Scene>

        {/* ============= SHOP TAB SECTION ============= */}

        <Scene key="shopTab" title="Courses" icon={TabIconeShop}>
          <Scene key="shopHomePage" component={ShopHome} title="Courses" initial />
          <Scene
            key="shopDateSelectionPage"
            component={ShopDateSelection}
            title="Choix de la date"
          />
          <Scene key="shopCreateListPage" component={ShopCreateList} title="Création" />
          <Scene key="shopListPage" component={ShopList} title="Liste de courses" />
        </Scene>

        {/* ============= OPTIONS TAB SECTION ============= */}

        <Scene key="optionsTab" title="Options" icon={TabIconeOption}>
          <Scene key="optionsPage" component={Options} title="Options" initial />
        </Scene>
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;

/*
<Scene key="authFlow">
        <Scene key="loginPage" component={Login} title="Connexion" initial />
      </Scene>
*/
