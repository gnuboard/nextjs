// app/(home)/(board)/board/[bo_table]/BoardWrites.js
'use client';

import React from 'react';
import { List, ListItem, Divider, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import dayjs from 'dayjs';

function formatDate(dateString) {
  const date = dayjs(dateString);
  const today = dayjs();

  if (date.isSame(today, 'day')) {
    return date.format('HH:mm:ss');
  } else {
    return date.format('YY-MM-DD');
  }
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
}

function BoardWrites({ writes }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isVerySmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const maxLengthSubject = isVerySmallScreen ? 20 : isSmallScreen ? 25 : 35;
  const maxLengthName = isVerySmallScreen ? 5 : isSmallScreen ? 6 : 10;

  return (
    <div>
      <Typography variant="h4" gutterBottom>{writes.board.bo_subject}</Typography>
      <List>
        {/* Header Row */}
        <ListItem>
          <Grid container spacing={2}>
            <Grid item xs={isSmallScreen ? 10 : 8}>
              <Typography variant="h6" component="div">
                제목
              </Typography>
            </Grid>
            {!isSmallScreen && (
              <Grid item xs={2}>
                <Typography variant="h6" component="div">
                  작성자
                </Typography>
              </Grid>
            )}
            <Grid item xs={2}>
              <Typography variant="h6" component="div">
                날짜
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
        <Divider component="li" />
        {/* Data Rows */}
        {writes.writes.map((write) => (
          <React.Fragment key={write.wr_id}>
            <ListItem alignItems="flex-start">
              <Grid container spacing={2}>
                <Grid item xs={isSmallScreen ? 10 : 8}>
                  <Typography variant="body1" component="div">
                    {truncateText(write.wr_subject, maxLengthSubject)}
                  </Typography>
                </Grid>
                {!isSmallScreen && (
                  <Grid item xs={2}>
                    <Typography variant="body2" color="textSecondary">
                      {truncateText(write.wr_name, maxLengthName)}
                    </Typography>
                  </Grid>
                )}
                <Grid item xs={2}>
                  <Typography variant="body2" color="textSecondary">
                    {formatDate(write.wr_datetime)}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default BoardWrites;
