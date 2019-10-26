import { NavigationActions, StackActions } from 'react-navigation';
import { screens } from '@constants';
// import { setDarkContent, setLightContent } from '@styles';

class NavigationService {
  constructor() {
    this._navigation = null;
  }

  init(navigation) {
    if (this._navigation) {
      return;
    }

    this._navigation = navigation;
  }

  getState() {
    return this._navigation.state;
  }

  navigate(screen, params) {
    const route = { routeName: screen, params };

    this._navigation.dispatch(NavigationActions.navigate(route));
  }

  push(screen, params) {
    const route = { routeName: screen, params };

    this._navigation.dispatch(StackActions.push(route));
  }

  replace(screen, params) {
    const route = { routeName: screen, params };

    this._navigation.dispatch(StackActions.replace(route));
  }

  navigateTo(screen, props) {
    this.navigate(screen, props);
  }

  navigateToUnauthorizedApp(props) {
    this.navigate(screens.AuthNavigator, props);
  }

  navigateToAuthorizedApp(props) {
    this.navigate(screens.AppNavigator, props);
  }

  navigateToEvent(eventItem, eventRoot) {
    this.navigate(screens.EventInsideScreen, {
      params: { eventItem, eventRoot },
    });
  }

  pushToEvent(eventItem, eventRoot) {
    this.push(screens.EventInsideScreen, {
      params: { eventItem, eventRoot },
    });
  }

  navigateToHome() {
    this.navigate(screens.HomeNavigator);
  }

  onGoBack() {
    this._navigation.dispatch(NavigationActions.back());
  }

  onPopToTop() {
    this._navigation.dispatch(StackActions.popToTop());
  }

  navigateToTerms() {
    this.navigate(screens.TermsConditions);
  }

  navigateToReviews(eventId) {
    this.navigate(screens.Reviews, { eventId });
  }

  navigateToCategory(category, props) {
    this.navigate(screens.Category, { category, ...props });
  }

  navigateToBookingList() {
    this.navigate(screens.BookingList);
  }

  navigateToReportAnIssue() {
    this.navigate(screens.ReportAnIssue);
  }

  navigateToCommentAndRate(eventId) {
    this.navigate(screens.CommentAndRate, { eventId });
  }
}

export default new NavigationService();
