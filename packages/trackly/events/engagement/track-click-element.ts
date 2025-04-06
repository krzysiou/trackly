import { getCurrentUrl } from '../../utils/get-current-url';
import { getNavigation } from '../../utils/get-navigation';
import { slugify } from '../../utils/slugify';

type TrackClickElementEventDataInput = {
  actor: string;
  targetName: string;
  targetPageType: string;
};

const composeClickElementEvent = (
  eventDataInput: TrackClickElementEventDataInput
) => {
  const { actor, targetName, targetPageType } = eventDataInput;

  const targetId = slugify(targetName);
  const targetPageId = slugify(targetPageType);
  const navigationType = getNavigation();
  const targetPageUrl = getCurrentUrl();

  return {
    actor,
    targetId,
    targetName,
    targetPageId,
    targetPageType,
    targetPageUrl,
    navigationType,
  };
};

export { composeClickElementEvent, type TrackClickElementEventDataInput };
