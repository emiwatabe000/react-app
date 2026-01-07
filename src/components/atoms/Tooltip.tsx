import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

type CustomTooltipProps = {
  title: string;
}

export function CustomTooltip({ title }: CustomTooltipProps) {
  return (
    <Tooltip title={title}>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}
