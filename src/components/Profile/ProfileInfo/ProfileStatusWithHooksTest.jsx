import {create} from "react-test-renderer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


describe('ProfileStatusWithHooks', () => {
    it("status from props should be in the state", () => {
        const component = create(<ProfileStatusWithHooks status={"ulkaBulka"}/>);
        const instance = component.getInstance();
        expect(instance.state.profilePage.status).toBe("ulkaBulka");
    })


});
