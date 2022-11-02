import React from 'react';

import { Box, DropZone, DropZoneProps, Label } from '@adminjs/design-system';
import { BasePropertyProps } from 'adminjs';

const CandidateProfilePicker: React.FC<BasePropertyProps> = ({
  property,
  onChange,
}) => {
  const handleDropZoneChange: DropZoneProps['onChange'] = (files) => {
    onChange('address', files.at(0)?.name);
  };

  return (
    <>
      <Box marginBottom="xxl">
        <Label>{property.label}</Label>
        <DropZone onChange={handleDropZoneChange} />
      </Box>
    </>
  );
};

export default CandidateProfilePicker;
