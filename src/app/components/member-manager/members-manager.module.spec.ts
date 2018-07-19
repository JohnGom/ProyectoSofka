import { MembersManagerModule } from './members-manager.module';

describe('MembersManagerModule', () => {
  let membersManagerModule: MembersManagerModule;

  beforeEach(() => {
    membersManagerModule = new MembersManagerModule();
  });

  it('should create an instance', () => {
    expect(membersManagerModule).toBeTruthy();
  });
});
