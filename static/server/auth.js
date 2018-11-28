const request = require("request");

exports.authenticate = (req, res) => {
  const options = {
    method: 'POST',
    url: 'https://thearena.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: '{"client_id":"KuhIFt8Blg4CChqebw13Snf6XSwXz5Cf","client_secret":"QBIZeiYeH_tIMp2GXcGTuVdmMRXfQd_YLmkd947zsFMsEQxlQGw4SGsVQZyBXDIy","audience":"https://thecampaignArena.com","grant_type":"client_credentials"}'
  };

  request(options, (error, response, body) => {
    res.json(response);
  });
};

exports.authError = (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ message: 'Missing or invalid token. Please logout And log back in.' });
  }
};
